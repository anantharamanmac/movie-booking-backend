// models/Show.js
import mongoose from "mongoose";

const showSchema = mongoose.Schema(
  {
    movie: { type: mongoose.Schema.Types.ObjectId, ref: "Movie", required: true },
    theatre: { type: mongoose.Schema.Types.ObjectId, ref: "Theatre", required: true },
    screen: { type: String, required: true }, // e.g., "Screen 1"
    showTime: { type: Date, required: true },
    price: { type: Number, required: true }, // per seat
    seatsAvailable: { type: Number, required: true }, // initially = totalSeats
  },
  { timestamps: true }
);

const Show = mongoose.model("Show", showSchema);
export default Show;
