const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const contactUsRoute = require("./contactUs");

const app = express();

// CORS configuration
const corsOptions = {
  origin: "https://maabaglamukhi.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Maa Baglamukhi Backend is running." });
});

app.use("/contact", contactUsRoute);

// Export the app as a serverless function
module.exports = app;
