import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import mongoose from "mongoose";

import router from "./router";
import errorMiddleware from "./middlewares/error-middleware";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors({
  credentials: true,
  origin: "http://localhost:5173"
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);
app.use(errorMiddleware);

async function start() {
  try {
    const mongodbUri = process.env.MONGODB_URI;
    if (!mongodbUri) {
      throw new Error("mongodb uri was not provided");
    }

    await mongoose.connect(mongodbUri);

    app.listen(PORT, () => {
      console.log(`running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
