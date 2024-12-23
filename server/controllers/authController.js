// authController.js
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { 
  generateToken, 
  generateRefreshToken 
} from '../middleware/authMiddleware.js'; // Correct import for the functions

// Register User
export const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ 
      $or: [{ email }, { username }] 
    });

    if (existingUser) {
      return res.status(400).json({ 
        message: 'User already exists' 
      });
    }

    // Create new user
    const newUser = new User({
      username,
      email,
      password,
      role: role || 'user'
    });

    await newUser.save();

    // Generate tokens
    const accessToken = generateToken(newUser);
    const refreshToken = generateRefreshToken(newUser);

    res.status(201).json({
      message: 'User registered successfully',
      tokens: {
        accessToken,
        refreshToken
      },
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role
      }
    });
  } catch (error) {
    console.error('Registration Error:', {
      message: error.message,
      stack: error.stack
    });
    res.status(500).json({ 
      message: 'Registration failed', 
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

// Login User
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ 
        message: 'Email and password are required' 
      });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ 
        message: 'Invalid credentials' 
      });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: 'Invalid credentials' 
      });
    }

    // Generate tokens
    const accessToken = generateToken(user);
    const refreshToken = generateRefreshToken(user);

    res.json({
      success: true,
      message: 'Login successful',
      tokens: {
        accessToken,
        refreshToken
      },
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    // Comprehensive error logging
    console.error('Login Error:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });

    // Send detailed error response in development
    res.status(500).json({ 
      success: true,
      message: 'Login failed', 
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

// Get User Profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select('-password')
      .lean();
    
    if (!user) {
      return res.status(404).json({ 
        message: 'User not found' 
      });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ 
      message: 'Profile fetch failed', 
      error: error.message 
    });
  }
};

// Refresh Tokens
export const refreshTokens = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({ 
        message: 'Refresh token is required' 
      });
    }

    // Verify refresh token
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    // Find user
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ 
        message: 'User not found' 
      });
    }

    // Generate new tokens
    const newAccessToken = generateToken(user);
    const newRefreshToken = generateRefreshToken(user);

    res.json({
      success: true,
      tokens: {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken
      }
    });
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        message: 'Refresh token expired' 
      });
    }

    res.status(500).json({ 
      message: 'Failed to refresh tokens', 
      error: error.message 
    });
  }
};

// Logout User
export const logoutUser  = async (req, res) => {
  // Here you can implement logic to invalidate the refresh token if needed
  res.json({ 
    success: true, 
    message: 'Logged out successfully' 
  });
};
