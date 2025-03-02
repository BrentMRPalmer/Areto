import mongoose from "mongoose";

// Define Section schema
const sectionSchema = new mongoose.Schema({
    code: { type: String, required: true}
})