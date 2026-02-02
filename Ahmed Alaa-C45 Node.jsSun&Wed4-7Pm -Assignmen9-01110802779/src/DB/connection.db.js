import mongoose from "mongoose";
import { DB_URI } from "../../config/config.service.js";

export const authenticateDB = async () => {
  try {
    const result = await mongoose.connect(DB_URI, {
      serverSelectionTimeoutMS: 3000,
    });
    console.log("Connection DB Successfuly");
  } catch (error) {
    console.log(`failed to DB connection ${error}`);
  }
};
