import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes.js"
import courseRoutes from "./routes/courseRoutes.js"
import sectionRoutes from "./routes/sectionRoutes.js"
import poolRoutes from "./routes/poolRoutes.js"
import groupRoutes from "./routes/groupRoutes.js"
import cookieParser from "cookie-parser"

// Creates an Express server instance
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser()); // Use cookies to manage sessions

// Set environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI, { dbName: "areto" })
    .then(() => {
        console.log("MongoDB connected")
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    })
    .catch((err) => {
        console.error("MongoDB connection error: ", err);
        process.exit(1);
    })

// Routes
app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/sections", sectionRoutes);
app.use("/api/pools", poolRoutes);
app.use("/api/groups", groupRoutes);

