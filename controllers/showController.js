import Show from "../models/Show.js";

export const getShows = async (req, res) => {
  const shows = await Show.find().populate("movie theatre"); // use 'theatre'
  res.json(shows);
};

export const addShow = async (req, res) => {
  const show = await Show.create(req.body);
  const populatedShow = await Show.findById(show._id).populate("movie theatre");
  res.status(201).json(populatedShow);
};

export const updateShow = async (req, res) => {
  const updatedShow = await Show.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  ).populate("movie theatre");
  res.json(updatedShow);
};

export const deleteShow = async (req, res) => {
  await Show.findByIdAndDelete(req.params.id);
  res.json({ message: "Show deleted" });
};
