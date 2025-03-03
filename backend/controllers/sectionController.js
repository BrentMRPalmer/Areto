import { Section, Course } from "../models/index.js"

// Create a section
export const createSection = async (req, res) => {
    try {
        const { code, term, professor, numStudents, course } = req.body;

        // Verify the course exists
        const verifiedCourse = await Course.findById(course);
        if (!verifiedCourse) {
            return res.status(404).json({ error: "Course not found" });
        }

        // Create new section
        const newSection = new Section({ code, term, professor, numStudents, course })

        // Save the section to MongoDB
        await newSection.save();

        res.status(201).json({ message: "Section created successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Error creating section", details: error.message });
    }
}