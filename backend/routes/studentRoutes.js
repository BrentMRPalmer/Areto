import express from "express";
import { registerStudent } from "../controllers/studentController.js";

const router = express.Router();

// Student routes
router.post("/register", registerStudent)

export default router;