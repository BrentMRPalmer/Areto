import express from "express";
import { createCourse, getCourses } from "../controllers/courseController.js";

const router = express.Router();

// Course GET routes
router.get("/", getCourses)

// Course POST routes
router.post("/", createCourse)

export default router;