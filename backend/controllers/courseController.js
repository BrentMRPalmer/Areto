import { Course } from "../models/index.js";

// Create a new course
export const createCourse = async (req, res) => {
  try {
    const { code, institution, name } = req.body;

    // Create new course
    const newCourse = new Course({ code, institution, name });

    // Save student to MongoDB
    await newCourse.save();

    res.status(201).json({ message: "Course successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error creating course", details: error.message });
  }
};
