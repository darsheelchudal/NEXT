import mongoose from "mongoose";

type connectionObject = {
  isConnected?: number; // ?: means connect ho bhi sakti hai nahi bhi hosakti hai
};

const connection: connectionObject = {};

const dbConnect = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URI || "", {});
    console.log(db);
    connection.isConnected = db.connections[0].readyState;
    console.log("Db connected successfully");
  } catch (err) {
    console.log("Database connection failed", err);
    process.exit();
  }
};

export default dbConnect;
