import express from "express";
import { registerStudent, loginStudent, enrollInCourse, getStudents, getEnrolledClasses, getStudentById, getCompatabilityScores } from "../controllers/studentController.js";
import { authMiddleware } from "../util/auth.js";

const router = express.Router();

// Student GET routes
router.get("/courses/:studentId", getEnrolledClasses);
router.get("/compatability/:studentId", getCompatabilityScores);
router.get("/:studentId", getStudentById);
router.get("/", getStudents);

// Student POST routes
router.post("/", registerStudent);
router.post("/enroll", enrollInCourse);
router.post("/login", loginStudent);

export default router;