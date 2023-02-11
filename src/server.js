import express from "express";
import dotenv from "dotenv";
import {connectDb} from "./db/connectDb.js";

import categoryRoute from "./routes/category.route.js";
import productRoute from "./routes/product.route.js";
import morgan from "morgan";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
connectDb();

app.use(express.json());
app.use(morgan("tiny"));
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);

app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
});
