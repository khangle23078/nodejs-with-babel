import express from "express";
import dotenv from "dotenv";
import productRoute from "./routes/product.route.js";
import {connectDb} from "./db/connectDb.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

connectDb();
app.use(express.json());
app.use("/api/product", productRoute);

app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
});
