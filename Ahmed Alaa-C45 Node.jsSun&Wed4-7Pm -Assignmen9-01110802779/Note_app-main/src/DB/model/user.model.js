import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: [18, "Age must be at least 18"],
      max: [60, "Age must be less than or equal 60"],
    },
  },
  {
    timestamps: true,
  },
);

export const UserModel =
  mongoose.models.User || mongoose.model("User", userSchema);
