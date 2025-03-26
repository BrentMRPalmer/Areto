import { Pool, Course, Section, Student } from "../models/index.js";

// Get pools (by section + course id or all)
export const getPools = async (req, res) => {
    try {
        const { courseId, sectionId, id } = req.query;

        let pools = []

        // Get from list of ids/courseIds if provided, else get all
        if (id == undefined) {
            if (courseId == undefined || sectionId == undefined) {
                return res.status(500).json({ error: "Invalid request: course or section ID missing." });
            }

            pools = await Pool.find({ 'course': { $in: courseId }, 'section': { $in: sectionId } })
        } else {
            pools = await Pool.find({ '_id': { $in: id }, })
        }

        res.status(200).json(pools);
    } catch (error) {
        res.status(500).json({ error: "Error getting pools", details: error.message })
    }
}

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
            const verifiedSection = await Section.findById(section);
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

// Enroll a student into a course
export const addStudentToPool = async (req, res) => {
    try {
      const { poolId, studentId } = req.body;
  
      // Verify the student exists
      const student = await Student.findById(studentId);
      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }
  
      // Find the pool, and update student array
      const pool = await Pool.findByIdAndUpdate(
        poolId,
        { $addToSet: { student: studentId } },
        { new: true }
      ).populate("student"); // Populate replaces studentIds with course objects
  
      if (!pool) {
        return res.status(404).json({ error: "Pool not found" });
      }
  
      res.status(200).json({ message: "Added successfully", student });
    } catch (error) {
      res.status(500).json({ error: "Error enrolling in course", details: error.message });
    }
  }