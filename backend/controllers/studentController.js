import { Student, Section } from "../models/index.js";
import { createSecretToken } from "../util/auth.js";
import bcrypt from "bcryptjs";

// Get all students
export const getStudents = async (req, res) => {
  try {
    const { ids } = req.query;

    const students = ids ? await Student.find({ '_id': { $in: ids } }) : await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: "Error getting students", details: error.message })
  }
}

// Get student by id
export const getStudentById = async (req, res) => {
  try {
    const { studentId } = req.params;
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found." });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: "Error getting student", details: error.message })
  }
}

// Register a new student
export const registerStudent = async (req, res) => {
  try {
    let { firstName, lastName, username, email, password, institution } = req.body;

    const existingUser = await Student.findOne({ email });

    if (existingUser) {
      return res.json({ message: "Student already registered." });
    }

    password = await bcrypt.hash(password, 12);

    // Create new student
    const newStudent = new Student({ firstName, lastName, username, email, password, institution });

    // Save student to MongoDB
    await newStudent.save();

    res.status(201).json({
      message: "Student registered successfully!",
      success: true,
      newStudent
    });
  } catch (error) {
    res.status(500).json({ error: "Error registering student", details: error.message });
  }
};

// Login as a student
export const loginStudent = async (req, res) => {
  try {
    const { usernameOrEmail, password } = req.body;

    if (!usernameOrEmail || !password) {
      return res.status(500).json({ message: "All fields are required" });
    }

    // Find associated student
    const user = usernameOrEmail.includes("@") ?
      await Student.findOne({ email: usernameOrEmail }) :
      await Student.findOne({ username: usernameOrEmail });

    if (!user) {
      return res.json({ message: "Incorrect username or email" });
    }

    const verifyPassword = await bcrypt.compare(password, user.password);
    if (!verifyPassword) return res.status(400).json({ message: "Invalid credentials" });

    const token = createSecretToken(user._id);

    // Include JWT token in response cookie
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(201).json({ data: { user: user }, token: token, message: "Login successful!" });
  } catch (error) {
    res.status(500).json({ error: "Error logging in.", details: error.message });
  }
}

// Enroll a student into a course
export const enrollInCourse = async (req, res) => {
  try {
    const { studentId, sectionId } = req.body;

    // Verify the course exists
    const section = await Section.findById(sectionId);
    if (!section) {
      return res.status(404).json({ error: "Section not found" });
    }

    // Find the student, and update enrolledCourses
    const student = await Student.findByIdAndUpdate(
      studentId,
      { $addToSet: { enrolledCourses: sectionId } },
      { new: true }
    ).populate("enrolledCourses"); // Populate replaces sectionIds with course objects

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json({ message: "Enrollment successful", student });
  } catch (error) {
    res.status(500).json({ error: "Error enrolling in course", details: error.message });
  }
}

// Get all enrolled classes for a specific student
export const getEnrolledClasses = async (req, res) => {
  try {
    const { studentId } = req.params;

    // Verify the course exists
    const studentClasses = await Student.findById(studentId, "enrolledCourses");
    if (!studentClasses) {
      return res.status(404).json({ error: "No classes were found." });
    }

    res.status(200).json(studentClasses.enrolledCourses);
  } catch (error) {
    res.status(500).json({ error: "Error enrolling in course", details: error.message });
  }
}