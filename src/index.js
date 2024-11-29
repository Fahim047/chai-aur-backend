import dotenv from "dotenv";
import { connectDB } from "../db/db.js";
dotenv.config({
  path: "../.env",
});
connectDB();

/*
import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGOBD_URI}/${DB_NAME}`);
    app.on("error", (err) => {
      console.log("Error: ", err);
      throw err;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log("Something went wrong: ", err);
  }
})();
*/
// require("dotenv").config({ path: "/.env" });
