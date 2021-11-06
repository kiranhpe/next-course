// connect to monogo db
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(
        process.env.MONGO_URI
      );
      console.log("MongoDB Connected...");
    }
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};
