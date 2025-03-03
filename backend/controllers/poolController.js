import { Pool, Course, Section } from "../models/index.js";
import mongoose from "mongoose";

// Create a new pool
export const createPool = async (req, res) => {
    try {
        const { name, numStudents, course, section } = req.body;

        // Verify the course exists
        const verifiedCourse = await Course.findById(course);
        if (!verifiedCourse) {
            return res.status(404).json({ error: "Course not found" });
        }

        // Verify the section exists
        if (section) {
            const verifiedSection = await Section.findById(new mongoose.Types.ObjectId(section));
            if (!verifiedSection) {
                return res.status(404).json({ error: "Section not found" });
            }

            // Create new pool (with section)
            const newPool = new Pool({ name, numStudents, course, section });
            await newPool.save();
            return res.status(201).json({ message: "Pool created successfully!" });
        }

        // Create new pool (without section)
        const newPool = new Pool({ name, numStudents, course });
        await newPool.save();
        return res.status(201).json({ message: "Pool created successfully!" });
      } catch (error) {
        res.status(500).json({ error: "Error creating pool", details: error.message });
    }
}