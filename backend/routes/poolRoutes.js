import express from "express";
import { getPools, createPool, addStudentToPool, getStudentsInPool } from "../controllers/poolController.js";

const router = express.Router();

// Pool GET routes
router.get("/", getPools)
router.get("/students/:poolId", getStudentsInPool)

// Pool POST routes
router.post("/", createPool)
router.post("/add", addStudentToPool)

export default router;