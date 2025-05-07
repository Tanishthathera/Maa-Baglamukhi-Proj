const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const contactUsRoute = require("./contactUs");

const app = express();
const port = process.env.PORT || 3000;

// Set CORS options
const corsOptions = {
  origin: "https://maabaglamukhi.vercel.app", // Allow request only from this domain
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP Methods
  allowedHeaders: "*", // Allow all headers
  credentials: true,
};

// Logging middleware to log all requests and headers
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  console.log('Headers:', req.headers);
  next();
});

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Add explicit OPTIONS handler for /contact to handle preflight requests
app.options("/contact", (req, res) => {
  res.header("Access-Control-Allow-Origin", corsOptions.origin);
  res.header("Access-Control-Allow-Methods", corsOptions.methods.join(","));
  res.header("Access-Control-Allow-Headers", corsOptions.allowedHeaders);
  res.header("Access-Control-Allow-Credentials", "true");
  res.sendStatus(204);
});

app.use("/contact", contactUsRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
