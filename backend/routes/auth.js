import express from "express";
import { User } from "../models/index.js"; // Import from index.js

const router = express.Router();

// Registration endpoint
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Create new user
    const newUser = new User({ username, email, password });

    // Save user to MongoDB
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error registering user", details: error.message });
  }
});

export default router;
