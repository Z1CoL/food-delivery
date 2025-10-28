import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/", userRouter);
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection failed:", err.message));

app.listen(port, () => console.log(` Server running on port ${port}`));
