import { Student } from "../models/index.js";

// Register a new student
export const registerStudent = async (req, res) => {
  try {
    const { firstName, lastName, username, email, password, institution } = req.body;

    // Create new student
    const newStudent = new Student({ firstName, lastName, username, email, password, institution });

    // Save student to MongoDB
    await newStudent.save();

    res.status(201).json({ message: "Student registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error registering student", details: error.message });
  }
};
