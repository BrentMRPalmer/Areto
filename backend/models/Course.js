import mongoose from "mongoose";

// Define Course schema
const courseSchema = new mongoose.Schema({
    code: { type: String, required: true, match: ["/^[A-Z]{3}\\d{4}$/", "Course code must be in the form ABC1234. Ex: GNG4120."] },
    institution: { type: String, required: true },
    name: { type: String, required: true }
})

courseSchema.index({ code: 1, institution: 1, name: 1 }, { unique: true })

// Export the Course model
const Course = mongoose.model("Course", courseSchema);
export default Course;