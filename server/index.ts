import express from "express";
import cors from "cors";

const PORT = 5000;

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`running on http://localhost:${PORT}`);
});
