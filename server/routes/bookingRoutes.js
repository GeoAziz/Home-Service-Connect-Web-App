// routes/bookingRoutes.js
import express from 'express';
import Booking from '../models/Booking.js';
import { authMiddleware } from '../middleware/authMiddleware.js'; // Optional authentication middleware

const router = express.Router();

// Create a new booking
router.post('/', authMiddleware, async (req, res) => {
  const { serviceType, preferredDate, preferredTime, additionalDetails } = req.body;

  try {
    const newBooking = new Booking({
      client: req.user.id, // Assuming user ID is available in req.user
      serviceType,
      preferredDate,
      preferredTime,
      additionalDetails
    });

    await newBooking.save();
    res.status(201).json({ success: true, booking: newBooking });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get all bookings for a client
router.get('/', authMiddleware, async (req, res) => {
  try {
    const bookings = await Booking.find({ client: req.user.id });
    res.json({ success: true, bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;