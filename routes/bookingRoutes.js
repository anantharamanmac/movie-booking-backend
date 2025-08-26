// backend/routes/bookingRoutes.js
import express from "express";
import Booking from "../models/Booking.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// POST /api/bookings – create a new booking
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

// GET /api/bookings/:movieId – get booked seats for a movie grouped by showtime
router.get("/:movieId", async (req, res) => {
  try {
    const { movieId } = req.params;
    const bookings = await Booking.find({ movie: movieId });

    // Aggregate booked seats by showtime
    const bookedSeatsByTime = {};
    bookings.forEach((b) => {
      const time = b.showtime.time; // make sure showtime has a 'time' property
      if (!bookedSeatsByTime[time]) bookedSeatsByTime[time] = [];
      bookedSeatsByTime[time].push(...b.seats);
    });

    res.status(200).json(bookedSeatsByTime);
  } catch (err) {
    console.error("Failed to fetch booked seats:", err);
    res.status(500).json({ message: "Failed to fetch booked seats" });
  }
});

export default router;
