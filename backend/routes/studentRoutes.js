import express from "express";
import { registerStudent, loginStudent, enrollInCourse, getStudents } from "../controllers/studentController.js";
import { authMiddleware } from "../util/auth.js";

const router = express.Router();

// Student GET routes
router.get("/", getStudents);
router.get("/profile", authMiddleware, async (req, res) => {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
});

// Student POST routes
router.post("/", registerStudent);
router.post("/enroll", enrollInCourse);
router.post("/login", loginStudent);

export default router;