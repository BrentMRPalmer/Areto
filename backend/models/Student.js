import mongoose from "mongoose";

// Define Student schema
const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true, lowercase: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  institution: { type: String, required: true },
  enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course"}]
}, { timestamps: true });

// Export the Student model
const Student = mongoose.model("Student", studentSchema);
export default Student;