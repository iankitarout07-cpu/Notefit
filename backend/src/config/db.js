import moongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    //connect to mongodb
    await moongoose.connect(process.env.MONGODB_URI,);
    console.log("Connected to MongoDB");
  } catch (error) {
    //If database connection fails, log the error and exit the process
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;