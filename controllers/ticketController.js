import Ticket from "../models/Ticket.js";

export const getTickets = async (req, res) => {
  const tickets = await Ticket.find().populate({
    path: "show",
    populate: ["movie", "theater"],
  }).populate("user");
  res.json(tickets);
};

export const addTicket = async (req, res) => {
  const ticket = await Ticket.create(req.body);
  res.json(ticket);
};
