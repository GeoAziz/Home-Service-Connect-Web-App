// server/routes/feedback.js

import express from 'express';
import Feedback from '../models/Feedback.js';  // Ensure the correct path and include .js extension

const router = express.Router();

// POST route to submit feedback
router.post('/', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json(feedback); // Return 201 status for created resource
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle errors
  }
});

// GET route to retrieve all feedback
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
});

// Export the router using ES module syntax
export default router;