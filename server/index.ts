import express from "express";
import cors from "cors";
import bodyParser from "body-parser"

const PORT = 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json())

app.post("/post", (req, res) => {
  console.log(req.body);
  res.send("resp").status(200);
});

app.listen(PORT, () => {
  console.log(`running on http://localhost:${PORT}`);
});
