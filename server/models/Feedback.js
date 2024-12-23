// server/routes/feedback.js

import express from 'express';
import Feedback from '../models/Feedback.js';  // Import the Feedback model

const router = express.Router();

// POST route to submit feedback
router.post('/', async (req, res) => {
  try {
    const feedback = new Feedback(req.body); // Create a new feedback instance with the request body
    await feedback.save(); // Save the feedback to the database
    res.status(201).json(feedback); // Return 201 status for created resource
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle errors and return a 400 status
  }
});

// GET route to retrieve all feedback
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find(); // Retrieve all feedback from the database
    res.json(feedbacks); // Return the feedbacks as JSON
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors and return a 500 status
  }
});

// Export the router using ES module syntax
export default router;