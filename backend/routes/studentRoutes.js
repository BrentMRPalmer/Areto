import express from "express";
import { registerStudent, enrollInCourse, getStudents } from "../controllers/studentController.js";

const router = express.Router();

// Student GET routes
router.get("/", getStudents);

// Student POST routes
router.post("/", registerStudent);
router.post("/enroll", enrollInCourse);

export default router;