import { body, validationResult } from 'express-validator';

export const validateRegistration = [
  body('username')
    .trim()
    .isLength({ min: 3, max: 50 }).withMessage('Username must be 3-50 characters')
    .isAlphanumeric().withMessage('Username must contain only letters and numbers'),
  
  body('email')
    .trim()
    .isEmail().withMessage('Invalid email address')
    .normalizeEmail(),
  
  body('password')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .withMessage('Password must include uppercase, lowercase, number, and special character'),
  
  body('role')
    .optional()
    .isIn(['user', 'provider', 'admin']).withMessage('Invalid user role')
];

export const validateLogin = [
  body('email')
    .trim()
    .isEmail().withMessage('Invalid email format')
    .notEmpty().withMessage('Email is required'),
  
  body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation failed',
        errors: errors.array() 
      });
    }
    next();
  }
];

// Add validation for forgot password
export const validateForgotPassword = [
  body('email')
    .trim()
    .isEmail().withMessage('Invalid email address')
    .normalizeEmail()
];

// Add validation for reset password
export const validateResetPassword = [
  body('token')
    .notEmpty().withMessage('Reset token is required'),
  
  body('newPassword')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .withMessage('Password must include uppercase, lowercase, number, and special character')
];

// Service Creation Validation
export const validateServiceCreation = [
  body('name')
    .trim()
    .notEmpty().withMessage('Service name is required')
    .isLength({ min: 3, max: 100 }).withMessage('Service name must be between 3 and 100 characters'),
  
  body('category')
    .trim()
    .notEmpty().withMessage('Service category is required')
    .isIn([
      'Cleaning', 
      'Maintenance', 
      'Renovation', 
      'Shifting', 
      'Solar', 
      'Gardening', 
      'Clinical', 
      'Catering'
    ]).withMessage('Invalid service category'),
  
  body('description')
    .trim()
    .notEmpty().withMessage('Service description is required')
    .isLength({ min: 10, max: 500 }).withMessage('Description must be between 10 and 500 characters'),
  
  body('basePrice')
    .isFloat({ min: 0 }).withMessage('Base price must be a positive number')
    .notEmpty().withMessage('Base price is required'),
  
  body('requiredSkills')
    .optional()
    .isArray().withMessage('Required skills must be an array'),
  
  body('estimatedDuration')
    .optional()
    .isFloat({ min: 0.5 }).withMessage('Estimated duration must be a positive number')
];

// Request Creation Validation
export const validateRequestCreation = [
  body('clientId')
    .notEmpty().withMessage('Client ID is required')
    .isMongoId().withMessage ('Client ID must be a valid MongoDB ObjectId'),

  body('serviceId')
    .notEmpty().withMessage('Service ID is required')
    .isMongoId().withMessage('Service ID must be a valid MongoDB ObjectId'),

  body('details')
    .notEmpty().withMessage('Request details are required')
    .isString().withMessage('Details must be a string')
    .isLength({ min: 10 }).withMessage('Details must be at least 10 characters long'),

  body('date')
    .optional()
    .isISO8601().withMessage('Date must be a valid ISO 8601 date format'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }
    next();
  }
];
// Existing validation middleware
export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      success: false,
      message: 'Validation Failed',
      errors: errors.array().map(err => ({
        field: err.param,
        message: err.msg
      }))
    });
  }
  next();
};

// Export all validations
export default {
  validateRegistration,
  validateLogin,
  validateForgotPassword,
  validateResetPassword,
  validateServiceCreation,
  validate
};