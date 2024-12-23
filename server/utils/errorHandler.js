// server/utils/errorHandler.js
export const handleError = (error, req, res) => {
    // Detailed logging
    console.error('Error Details:', {
      message: error.message,
      name: error.name,
      stack: error.stack,
      path: req.path,
      method: req.method
    });
  
    // Error type specific handling
    switch (error.name) {
      case 'ValidationError':
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: Object.values(error.errors).map(err => err.message)
        });
  
      case 'CastError':
        return res.status(400).json({
          success: false,
          message: 'Invalid ID format',
          error: error.message
        });
  
      case 'MongoError':
        if (error.code === 11000) {
          return res.status(409).json({
            success: false,
            message: 'Duplicate key error',
            duplicateFields: Object.keys(error.keyPattern || {})
          });
        }
        break;
  
      default:
        break;
    }
  
    // Generic error response
    res.status(500).json({ 
      success: false,
      message: 'An unexpected error occurred',
      error: process.env.NODE_ENV === 'development'
        ? {
            message: error.message,
            stack: error.stack
          }
        : 'Internal Server Error'
    });
  };