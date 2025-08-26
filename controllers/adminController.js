// backend/controllers/adminController.js
import Movie from "../models/Movie.js";
import Theatre from "../models/Theatre.js";
import Show from "../models/Show.js";
import Booking from "../models/Booking.js";

// Movies
export async function addMovie(req, res) {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getMovies(req, res) {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function updateMovie(req, res) {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function deleteMovie(req, res) {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: "Movie deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Theaters
export async function addTheater(req, res) {
  try {
    const theater = await Theatre.create(req.body);
    res.status(201).json(theater);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getTheaters(req, res) {
  try {
    const theaters = await Theatre.find();
    res.json(theaters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Shows
export async function addShow(req, res) {
  try {
    const show = await Show.create(req.body);
    res.status(201).json(show);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getShows(req, res) {
  try {
    const shows = await Show.find().populate("movie theater");
    res.json(shows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Timings
export async function addTiming(req, res) {
  try {
    const show = await Show.findById(req.body.showId);
    show.timings.push(req.body.time);
    await show.save();
    res.status(201).json(show);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getTimings(req, res) {
  try {
    const shows = await Show.find();
    res.json(shows.map(s => ({ title: s.title, timings: s.timings })));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Tickets
export async function getTickets(req, res) {
  try {
    const tickets = await Booking.find().populate("user show");
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
