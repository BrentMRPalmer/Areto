import express from "express";
import { createCourse } from "../controllers/courseController.js";

const router = express.Router();

// Course routes
router.post("/", createCourse)

export default router;