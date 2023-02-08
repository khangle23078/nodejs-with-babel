import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "cloudshop",
    });
    console.log("Connect Database success");
  } catch (error) {
    console.error(error);
  }
};
