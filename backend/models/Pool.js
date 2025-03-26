import mongoose from "mongoose";

// Define Pool schema
const poolSchema = new mongoose.Schema({
    name: { type: String, required: true },
    numStudents: {
        type: Number, required: true,
        validate: {
            validator: Number.isInteger,
            message: "numStudents must be an integer."
        }
    },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    section: { type: mongoose.Schema.Types.ObjectId, ref: "Section", required: false },
    student: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }]
}, { timestamps: true })

poolSchema.index({ name: 1, course: 1, section: 1 }, { unique: true })

// Export the Pool model
const Pool = mongoose.model("Pool", poolSchema);
export default Pool;