import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI_DIRECT || process.env.MONGODB_URI;
  if (!uri) {
    throw new Error(
      "Missing MongoDB connection string. Set MONGODB_URI_DIRECT or MONGODB_URI in .env"
    );
  }

  const options = {};
  if (process.env.MONGODB_DB_NAME) {
    options.dbName = process.env.MONGODB_DB_NAME;
  }

  console.log(
    `Connecting to MongoDB using ${process.env.MONGODB_URI_DIRECT ? "direct URI" : "configured URI"}`
  );

  try {
    const conn = await mongoose.connect(uri, options);
    console.log(`MongoDB connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error("MongoDB connect error:", error);
    throw error;
  }
};
