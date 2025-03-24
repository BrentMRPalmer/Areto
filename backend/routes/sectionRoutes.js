import express from "express";
import { createSection, getSections } from "../controllers/sectionController.js";

const router = express.Router();

// Section GET routes
router.get("/", getSections)

// Section POST routes
router.post("/", createSection)

export default router;