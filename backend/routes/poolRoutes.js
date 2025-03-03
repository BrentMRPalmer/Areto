import express from "express";
import { createPool } from "../controllers/poolController.js";

const router = express.Router();

// Pool routes
router.post("/", createPool)

export default router;