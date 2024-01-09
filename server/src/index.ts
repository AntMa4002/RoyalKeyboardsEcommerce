import * as dotenv from "dotenv";
dotenv.config({ path: "./src/.env" });
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/user";
import { productRouter } from "./routes/product";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/product", productRouter);

mongoose.connect(process.env.MONGODB_URI);

app.listen(3001, () => console.log("SERVER STARTED"));
