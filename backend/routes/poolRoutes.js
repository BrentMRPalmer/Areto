import express from "express";
import { getPools, createPool } from "../controllers/poolController.js";

const router = express.Router();

// Pool GET routes
router.get("/", getPools)

// Pool POST routes
router.post("/", createPool)

export default router;