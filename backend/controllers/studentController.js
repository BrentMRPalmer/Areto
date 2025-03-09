import { Student, Course } from "../models/index.js";

// Get all students
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: "Error getting students", details: error.message})
  }
}

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

// Enroll a student into a course
export const enrollInCourse = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;

    // Verify the course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    // Find the student, and update enrolledCourses
    const student = await Student.findByIdAndUpdate(
      studentId,
      { $addToSet: {enrolledCourses: courseId }},
      { new: true }
    ).populate("enrolledCourses"); // Populate replaces courseIds with course objects

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json({ message: "Enrollment successful", student });
  } catch (error) {
    res.status(500).json({ error: "Error enrolling in course", details: error.message });
  }
}