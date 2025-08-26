// backend/routes/movieRoutes.js
import { Router } from "express";
const router = Router();

import { 
  getMovies, 
  getMovieById, 
  createMovie, 
  updateMovie, 
  deleteMovie 
} from "../controllers/movieController.js";

import { verifyToken, verifyAdmin } from "../middleware/authMiddleware.js"; // <-- use named imports

// Public Routes
router.get("/", getMovies);
router.get("/:id", getMovieById);

// Admin Routes (protected)
router.post("/", verifyToken, verifyAdmin, createMovie);
router.put("/:id", verifyToken, verifyAdmin, updateMovie);
router.delete("/:id", verifyToken, verifyAdmin, deleteMovie);

export default router;
