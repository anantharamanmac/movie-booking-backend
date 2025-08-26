// backend/routes/authRoutes.js
import { Router } from "express";
import { registerUser, loginUser, getProfile } from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js"; // <-- named import

const router = Router();

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Get user profile (protected)
router.get("/profile", verifyToken, getProfile);

export default router;
