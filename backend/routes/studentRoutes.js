import express from "express";
import { registerStudent, loginStudent, enrollInCourse, getStudents, getEnrolledClasses, getStudentById } from "../controllers/studentController.js";
import { authMiddleware } from "../util/auth.js";

const router = express.Router();

// Student GET routes
router.get("/", getStudents);
router.get("/:studentId", getStudentById);
router.get("/courses/:studentId", getEnrolledClasses);

// Student POST routes
router.post("/", registerStudent);
router.post("/enroll", enrollInCourse);
router.post("/login", loginStudent);

export default router;