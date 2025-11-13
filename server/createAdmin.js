import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js";

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const createAdmin = async () => {
  const hashedPassword = await bcrypt.hash("Admin12345", 10); // hash password
  const admin = new Admin({
    username: "admin",
    password: hashedPassword
  });
  await admin.save();
  console.log("Admin user created");
  mongoose.disconnect();
};

createAdmin();
