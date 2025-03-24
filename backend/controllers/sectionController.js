import { Section, Course } from "../models/index.js"

// Get sections (by course id or all)
export const getSections = async (req, res) => {
    try {
        const { ids, courseIds } = req.query;

        // Get from list of ids/courseIds if provided, else get all
        let sections = []

        if (ids != undefined) {
            sections = await Section.find({ '_id': { $in: ids } })
        } else if (courseIds != undefined) {
            sections = await Section.find({ 'course': { $in: courseIds } })
        } else {
            sections = await Section.find();
        }
        res.status(200).json(sections);
    } catch (error) {
        res.status(500).json({ error: "Error getting sections", details: error.message })
    }
}

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