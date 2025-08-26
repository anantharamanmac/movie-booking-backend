import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  show: { type: mongoose.Schema.Types.ObjectId, ref: "Show", required: true },
  seats: [{ type: String }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Ticket", ticketSchema);
