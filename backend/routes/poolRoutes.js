import express from "express";
import { getPools, createPool, addStudentToPool } from "../controllers/poolController.js";

const router = express.Router();

// Pool GET routes
router.get("/", getPools)

// Pool POST routes
router.post("/", createPool)
router.post("/add", addStudentToPool)

export default router;