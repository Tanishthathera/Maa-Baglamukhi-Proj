const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const contactUsRoute = require("./contactUs");


const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Maa Baglamukhi Backend is running." });
});

// Set CORS options
const corsOptions = {
  origin: "*", // Allow all origins temporarily for testing
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP Methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed Headers
  credentials: false, // Disable credentials for wildcard origin
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Explicitly handle OPTIONS preflight requests
app.options("*", cors(corsOptions));

app.use(bodyParser.json());
app.use("/contact", contactUsRoute);

module.exports = (req, res) => {
  app(req, res);
};
