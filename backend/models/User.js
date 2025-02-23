import mongoose from "mongoose";

// Define User schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timestamps: true }); // Adds `createdAt` and `updatedAt`

// Export the User model
const User = mongoose.model("User", userSchema);
export default User;
