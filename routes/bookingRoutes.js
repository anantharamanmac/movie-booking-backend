// backend/routes/bookingRoutes.js
import express from "express";
import { createBooking, getUserBookings, getAllBookings, cancelBooking } from "../controllers/bookingController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// User creates a booking
router.post("/", protect, createBooking);

// User gets their own bookings
router.get("/mybookings", protect, getUserBookings);

// Admin gets all bookings
router.get("/", protect, admin, getAllBookings);

// Cancel a booking
router.delete("/:id", protect, cancelBooking);

export default router;
