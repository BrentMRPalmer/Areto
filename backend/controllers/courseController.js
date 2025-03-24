import { Course } from "../models/index.js";

// Get all courses
export const getCourses = async (req, res) => {
  try {
    const { ids } = req.query;

    // Get from list of ids if provided, else get all
    const classes = ids ? await Course.find({ '_id': { $in: ids } }) : await Course.find();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ error: "Error getting classes", details: error.message })
  }
}

// Create a new course
export const createCourse = async (req, res) => {
  try {
    const { code, institution, name } = req.body;

    // Create new course
    const newCourse = new Course({ code, institution, name });

    // Save course to MongoDB
    await newCourse.save();

    res.status(201).json({ message: "Course created successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error creating course", details: error.message });
  }
};