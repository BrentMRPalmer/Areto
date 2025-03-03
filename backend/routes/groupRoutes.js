import express from "express";
import { createGroup } from "../controllers/groupController.js";

const router = express.Router();

// Group routes
router.post("/", createGroup)

export default router;