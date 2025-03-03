import mongoose from "mongoose";

// Define Section schema
const sectionSchema = new mongoose.Schema({
    code: { type: String, required: true },
    term: { type: String, required: true },
    professor: { type: String, required: true},
    numStudents: { type: Number, required: true, 
        validate: { 
            validator: Number.isInteger,
            message: "numStudents must be an integer."
        }
    },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true }
}, { timestamps: true })

sectionSchema.index({ code: 1, term: 1, professor: 1, course: 1 }, { unique: true })

// Export the Section model
const Section = mongoose.model("Section", sectionSchema);
export default Section;