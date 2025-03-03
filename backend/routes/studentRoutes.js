import express from "express";
import { registerStudent } from "../controllers/studentController.js";

const router = express.Router();

// Student routes
router.post("/", registerStudent)

export default router;