import Theater from "../models/Theatre.js";

export const getTheaters = async (req, res) => {
  const theaters = await Theater.find();
  res.json(theaters);
};

export const addTheater = async (req, res) => {
  const theater = await Theater.create(req.body);
  res.json(theater);
};

export const updateTheater = async (req, res) => {
  const theater = await Theater.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(theater);
};

export const deleteTheater = async (req, res) => {
  await Theater.findByIdAndDelete(req.params.id);
  res.json({ message: "Theater deleted" });
};
