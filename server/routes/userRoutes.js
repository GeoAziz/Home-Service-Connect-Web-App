import express from 'express';
import { 
  registerUser, 
  loginUser, 
  getUserProfile 
} from '../controllers/userController.js';
import { 
  authMiddleware, 
  checkRole 
} from '../middleware/authMiddleware.js';
import { 
  validateRegistration, 
  validateLogin 
} from '../middleware/validationMiddleware.js';
import User from '../models/User.js';  // Import User model to use in the '/providers' route

const router = express.Router();

// Public Routes
router.post('/register', 
  validateRegistration, 
  registerUser
);

router.post('/login', 
  validateLogin, 
  loginUser
);

// Protected Routes
router.get('/profile', 
  authMiddleware, 
  getUserProfile
);

// Role-specific Routes
router.get('/providers', 
  authMiddleware, 
  checkRole(['admin']), 
  async (req, res) => {
    try {
      const providers = await User.find({ role: 'provider' });
      if (!providers || providers.length === 0) {
        return res.status(404).json({ message: 'No providers found' });
      }
      res.json(providers);
    } catch (error) {
      res.status(500).json({ 
        message: 'Failed to fetch providers', 
        error: error.message 
      });
    }
  }
);

// Dashboard Route (Added to solve 404 issue)
router.get('/dashboard', 
  authMiddleware, 
  async (req, res) => {
    try {
      // Find the authenticated user
      const user = await User.findById(req.user.id).select('-password');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      // Respond with user data for the dashboard
      res.json({
        message: 'Welcome to your dashboard',
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role
        }
      });
    } catch (error) {
      res.status(500).json({ 
        message: 'Failed to load dashboard data', 
        error: error.message 
      });
    }
  }
);

export default router;
