import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: String,
  poster: String,
  duration: String,
  description: String,
  trailer: String, // this must exactly match "trailer"
  language: String,
  releaseDate: String,
});

export default mongoose.model("Movie", movieSchema);
