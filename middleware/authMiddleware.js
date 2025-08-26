// backend/middleware/authMiddleware.js
import jwt from "jsonwebtoken";
import User from "../models/User.js"; // default import of the model

// Middleware to verify token
export const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password"); // call findById on model
    if (!req.user) return res.status(401).json({ message: "User not found" });
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Admin middleware
export const verifyAdmin = async (req, res, next) => {
  try {
    await verifyToken(req, res, async () => {
      if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Admin access only" });
      }
      next();
    });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
