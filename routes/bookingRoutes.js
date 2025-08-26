// backend/routes/bookingRoutes.js
import express from "express";
import Booking from "../models/Booking.js";
import { verifyToken } from "../middleware/authMiddleware.js"; // ✅ fixed import

const router = express.Router();

// POST /api/bookings
router.post("/", verifyToken, async (req, res) => {
  try {
    const { movieId, showtime, seats, totalPrice } = req.body;

    if (!movieId || !showtime || !seats || seats.length === 0 || !totalPrice) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const booking = new Booking({
      user: req.user._id, // set by verifyToken
      movie: movieId,
      showtime,
      seats,
      totalPrice,
    });

    const savedBooking = await booking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    console.error("Booking creation failed:", error);
    res.status(500).json({ message: "Booking creation failed" });
  }
});

export default router;
