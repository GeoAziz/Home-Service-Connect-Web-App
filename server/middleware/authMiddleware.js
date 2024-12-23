import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Auth Middleware to verify token and attach user to the request object
export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authorization token required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = { id: user._id, role: user.role }; // Attach user details to the request
    next();
  } catch (error) {
    console.error('Auth Middleware Error:', error);
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

// Generate access token for a user
export const generateToken = (user) => {
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
  return token;
};

// Generate refresh token for a user
export const generateRefreshToken = (user) => {
  const refreshToken = jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
  return refreshToken;
};

// Check user role for role-based access control (RBAC)
export const checkRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden: You do not have the right role' });
    }
    next();
  };
};

// AuthProvider - Middleware to handle roles and permissions (Admin Role Example)
export const AuthProvider = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authorization token required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Assign the user details to the request object
    req.user = user;

    // You could add further role or permission checks here depending on your requirements
    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'You do not have sufficient privileges to perform this action' });
    }

    next();
  } catch (error) {
    console.error('AuthProvider Error:', error);
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};
