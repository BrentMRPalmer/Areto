import mongoose from "mongoose";

// Define Group schema
const groupSchema = new mongoose.Schema({
    name: {type: String, required: true },
    numStudents: { type: Number, required: true, 
        validate: { 
            validator: Number.isInteger,
            message: "numStudents must be an integer."
        }
    },
    pool: { type: mongoose.Schema.Types.ObjectId, ref: "Pool", required: true },
    student: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student"}]
}, { timestamps: true })

groupSchema.index({ name: 1, pool: 1 }, { unique: true })

// Export the Group model
const Group = mongoose.model("Group", groupSchema);
export default Group;