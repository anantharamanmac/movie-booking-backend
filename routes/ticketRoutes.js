import express from "express";
import { getTickets, addTicket } from "../controllers/ticketController.js";
const router = express.Router();

// Tickets are usually read-only for admin, no edit/delete
router.get("/", getTickets);
router.post("/", addTicket);

export default router;
