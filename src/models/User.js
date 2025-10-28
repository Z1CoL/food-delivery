import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String },
    address: { type: String },
    role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
    orderedFoods: { type: [Schema.ObjectId] },
    isVerified: { type: Boolean },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
