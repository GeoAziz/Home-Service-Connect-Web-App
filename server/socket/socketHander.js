import { Server } from 'socket.io';

const configureSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: [
        'http://localhost:3000', 
        'http://127.0.0.1:3000',
        'http://localhost:5000',
        'http://127.0.0.1:5000'
      ],
      methods: ['GET', 'POST', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true
    },
    transports: ['websocket', 'polling'],
    pingTimeout: 60000,
    pingInterval: 25000
  });

  // Middleware for authentication (optional)
  io.use((socket, next) => {
    try {
      // Optional token validation
      // const token = socket.handshake.auth.token;
      // Validate token if needed
      next();
    } catch (error) {
      next(new Error('Authentication error'));
    }
  });

  // Socket connection handler
  io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    // Example event handlers
    socket.on('register', (userId) => {
      console.log(`User ${userId} registered`);
      socket.join(userId);
    });

    socket.on('disconnect', (reason) => {
      console.log(`Socket ${socket.id} disconnected due to ${reason}`);
    });

    // Heartbeat to keep connection alive
    socket.on('ping', (callback) => {
      if (callback) callback();
    });
  });

  return io;
};

export default configureSocket;