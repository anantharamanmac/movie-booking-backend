import { Router } from "express";
const router = Router();
import * as authMiddleware from "../middleware/authMiddleware.js";
const { verifyAdmin } = authMiddleware;

import { addMovie, getMovies, updateMovie, deleteMovie, addTheater, getTheaters, addShow, getShows, addTiming, getTimings, getTickets } from "../controllers/adminController.js";

// Movies
router.get("/movies", verifyAdmin, getMovies);
router.post("/movies", verifyAdmin, addMovie);
router.put("/movies/:id", verifyAdmin, updateMovie);
router.delete("/movies/:id", verifyAdmin, deleteMovie);

// Theaters
router.get("/theaters", verifyAdmin, getTheaters);
router.post("/theaters", verifyAdmin, addTheater);

// Shows
router.get("/shows", verifyAdmin, getShows);
router.post("/shows", verifyAdmin, addShow);

// Timings
router.get("/timings", verifyAdmin, getTimings);
router.post("/timings", verifyAdmin, addTiming);

// Tickets
router.get("/tickets", verifyAdmin, getTickets);

export default router;
