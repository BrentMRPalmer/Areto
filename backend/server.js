import express from "express";
import mongoose from "mongoose";

// Creates an Express server instance
const app = express();

// Set environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("MongoDB connected")
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    })
    .catch((err) => {
        console.error("MongoDB connection error: ", err);
        process.exit(1);
    })





