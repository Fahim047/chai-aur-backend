import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected...! \n Host: ${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.log("MongoDB connection error: ", err);
    process.exit(1);
  }
};
