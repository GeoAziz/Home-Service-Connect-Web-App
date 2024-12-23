import express from 'express';
import { 
  registerUser , 
  loginUser , 
  forgotPassword, 
  resetPassword, 
  verifyToken,
  refreshTokens
} from '../controllers/authController.js';
import { 
  validateRegistration, 
  validateLogin,
  validateForgotPassword,
  validateResetPassword
} from '../middleware/validationMiddleware.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

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

router.post('/forgot-password', 
  validateForgotPassword, 
  forgotPassword
);

router.post('/reset-password', 
  validateResetPassword, 
  resetPassword
);

// Protected Routes
router.get('/verify', 
  authMiddleware,  // Ensure the user is authenticated
  verifyToken      // Call the verifyToken function to check the token
);

router.post('/refresh-token', 
  refreshTokens
);

router.get('/profile', authMiddleware, async (req, res) => {
  try {
    // req.user is set by the authMiddleware
    const user = await User.findById(req.user.id)
      .select('-password')  // Exclude password
      .lean();  // Convert to plain object

    if (!user) {
      return res.status(404).json({ message: 'User  not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Profile Fetch Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Logout Route (optional, can be implemented on client-side)
router.post('/logout', (req, res) => {
  // Clear client-side token
  res.json({ 
    success: true, 
    message: 'Logged out successfully' 
  });
});

export default router;