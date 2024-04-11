import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";

import router from "./router";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
