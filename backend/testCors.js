const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "https://maabaglamukhi.vercel.app",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: "*",
  credentials: true,
};

app.use(cors(corsOptions));

app.options("/test", (req, res) => {
  res.sendStatus(204);
});

app.post("/test", (req, res) => {
  res.json({ message: "Test POST successful" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Test CORS server running on port ${port}`);
});
