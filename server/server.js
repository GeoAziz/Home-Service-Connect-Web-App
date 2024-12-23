import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import compression from 'compression';
import winston from 'winston';
import configureSocket from './socket/socketHandler.js';  // Ensure correct path for socket handler
import providerRoutes from './routes/providerRoutes.js';  // Ensure correct path for provider routes

// Route Imports
import authRoutes from './routes/auth.js';
import userRoutes from './routes/userRoutes.js';
import serviceRoutes from './routes/serviceRoutes.js';
import requestRoutes from './routes/requestRoutes.js';
import feedbackRoutes from './routes/feedback.js';
import contactRoutes from './routes/contactRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import ServiceProvider from './models/ServiceProvider.js';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Logging Configuration
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  defaultMeta: { service: 'poafix-server' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
});

// Dotenv Loading Strategy
const loadEnv = () => {
  try {
    const rootEnvPath = path.resolve(__dirname, '../.env');
    dotenv.config({ path: rootEnvPath, override: false });

    const serverEnvPath = path.resolve(__dirname, '.env');
    dotenv.config({ path: serverEnvPath, override: true });

    const requiredEnvs = [
      'MONGODB_URI', 
      'JWT_SECRET', 
      'GMAIL_EMAIL', 
      'GMAIL_APP_PASSWORD'
    ];

    requiredEnvs.forEach(env => {
      if (!process.env[env]) {
        logger.error(`Missing required environment variable: ${env}`);
        process.exit(1);
      }
    });

    logger.info('Environment variables loaded successfully');
  } catch (error) {
    logger.error('Error loading environment variables', error);
    process.exit(1);
  }
};

// Load environment variables
loadEnv();

// Create Express App
const app = express();

// Trust proxy for rate limiting
app.set('trust proxy', 'loopback');

// Security Middleware
app.use(helmet());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later',
  standardHeaders: true, 
  legacyHeaders: false, 
});
app.use(limiter);

// Compression Middleware
app.use(compression());

// Create HTTP Server
const server = http.createServer(app);

// Socket.io Configuration
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000", 
    methods: ["GET", "POST"]
  },
  pingTimeout: 60000 
});

// CORS Configuration
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      'http://localhost:3000',
      'https://localhost:5000',
      'http://127.0.0.1:3000',
      'https://127.0.0.1:5000'
    ];

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Methods', 'Access-Control-Allow-Origin'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Apply CORS and JSON middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging Middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.path}`);
  next();
});

// Route Configurations
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);  // Users route
app.use('/api/services', serviceRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api', bookingRoutes);  // Booking route

// **Added Route for /api/dashboard**
app.get('/api/dashboard', (req, res) => {
  res.json({ message: 'Welcome to the dashboard!' });
});

// Get nearby service providers
app.get('/api/service-providers', async (req, res) => {
  const { lat, lng } = req.query;
  const providers = await ServiceProvider.find({
    location: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [lng, lat]
        },
        $maxDistance: 5000 // 5 km
      }
    }
  });
  res.json(providers);
 
});

// Gmail SMTP Transporter Setup
const createGmailTransporter = () => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD
      },
      tls: {
        ciphers: 'TLSv1.2',
        rejectUnauthorized: process.env.NODE_ENV === 'production'
      }
    });

    transporter.verify((error) => {
      if (error) {
        logger.error('Email Transporter Verification Failed', error);
      } else {
        logger.info('Email Transporter Ready ✅');
      }
    });

    return transporter;
  } catch (error) {
    logger.error('Email Transporter Creation Failed', error);
    return null;
  }
};

// Create Gmail Transporter
const transporter = createGmailTransporter();

// Mongoose Connection Configuration
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, mongooseOptions);
    logger.info('MongoDB connected successfully');
  } catch (error) {
    logger.error('MongoDB connection error', error);
    setTimeout(connectDB, 5000);
  }
};

// Error Handling Middleware
const errorHandler = (err, req, res, next) => {
  logger.error('Unhandled Error', {
    message: err.message,
    stack: err.stack,
    method: req.method,
    path: req.path
  });

  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
};
app.use(errorHandler);

// Graceful Shutdown
const gracefulShutdown = async () => {
  try {
    await mongoose.connection.close();
    server.close(() => {
      logger.info('Server and database connections closed');
      process.exit(0);
    });
  } catch (error) {
    logger.error('Shutdown error', error);
    process.exit(1);
  }
};

// Listen for termination signals
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// Socket.io Configuration
const socketConfig = (io) => {
  io.on('connection', (socket) => {
    logger.info('New client connected');

    socket.on('register', (userId) => {
      socket.join(userId);
      logger.info(`User ${userId} registered`);
    });

    socket.on('request_action', (data) => {
      io.to(data.recipientId).emit('notification', data);
    });

    socket.on('disconnect', () => {
      logger.info('Client disconnected');
    });
  });
};

// Initialize Socket Configuration
socketConfig(io);

// Start Server
const startServer = () => {
  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
    logger.info(`Environment: ${process.env.NODE_ENV || 'development'}`);
  });
};

// Delay server start to ensure DB connection
mongoose.connection.once('open', startServer);

// Initialize Database Connection
connectDB();

// Export the app, server, io, and transporter
export { app, server, io, transporter };
