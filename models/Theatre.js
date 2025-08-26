// models/Theatre.js
import mongoose from "mongoose";

const screenSchema = mongoose.Schema({
  name: { type: String, required: true }, // e.g., Screen 1, Gold Class
  totalSeats: { type: Number, required: true }, // total seats in screen
});

const theatreSchema = mongoose.Schema(
  {
    name: { type: String, required: true }, // e.g., PVR Cinemas
    location: { type: String, required: true },
    screens: [screenSchema],
  },
  { timestamps: true }
);

const Theatre = mongoose.model("Theatre", theatreSchema);
export default Theatre;
