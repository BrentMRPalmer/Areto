import express from "express";
import { createSection } from "../controllers/sectionController.js";

const router = express.Router();

// Section routes
router.post("/", createSection)

export default router;