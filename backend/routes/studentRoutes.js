import express from "express";
import { registerStudent, enrollInCourse } from "../controllers/studentController.js";

const router = express.Router();

// Student routes
router.post("/", registerStudent);
router.post("/enroll", enrollInCourse);

export default router;