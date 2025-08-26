import express from "express";
import { getShows, addShow, updateShow, deleteShow } from "../controllers/showController.js";
const router = express.Router();

router.get("/", getShows);
router.post("/", addShow);
router.put("/:id", updateShow);
router.delete("/:id", deleteShow);

export default router;
