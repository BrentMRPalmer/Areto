import { Group, Pool } from "../models/index.js"

// Create a group
export const createGroup = async (req, res) => {
    try {
        const { name, numStudents, pool } = req.body;

        // Verify the pool exists
        const verifiedPool = await Pool.findById(pool);
        if (!verifiedPool) {
            return res.status(404).json({ error: "Course not found" });
        }

        // Create new Group
        const newPool = new Group({ name, numStudents, pool })

        // Save the group to MongoDB
        await newPool.save();

        res.status(201).json({ message: "Group created successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Error creating group", details: error.message });
    }
}