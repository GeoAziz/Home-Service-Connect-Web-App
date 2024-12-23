import express from 'express';
import Contact from '../models/contact.js';
import EmailService from '../utils/emailService.js';
import logger from '../utils/logger.js';

const router = express.Router();

router.post('/submit', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate input
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Create new contact
    const newContact = new Contact({ 
      name, 
      email, 
      phone, 
      message 
    });

    // Validate using mongoose schema validation
    await newContact.validate();

    // Save to database
    await newContact.save();

    // Send notification email
    try {
      await EmailService.sendContactNotification(newContact);
    } catch (emailError) {
      // Log email error but don't block contact submission
      logger.error('Email notification failed', emailError);
    }

    // Respond with success
    res.status(201).json({ 
      success: true, 
      message: 'Message submitted successfully',
      contactId: newContact._id
    });

  } catch (error) {
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errorMessages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ 
        success: false, 
        message: 'Validation failed',
        errors: errorMessages
      });
    }

    // Log and respond to other errors
    logger.error('Contact submission error', { 
      error: error.message, 
      stack: error.stack 
    });

    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal Server Error'
    });
  }
});

export default router;