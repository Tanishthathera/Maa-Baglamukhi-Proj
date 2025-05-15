const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const favicon = require("serve-favicon");
require("dotenv").config();

const contactUsRoute = require("./contactUs");

const app = express();

// Serve favicon
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// Set CORS options
const corsOptions = {
  origin: "https://maabaglamukhi.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

// Explicitly handle OPTIONS preflight requests
app.options("*", cors(corsOptions));

app.use(bodyParser.json());
app.use("/contact", contactUsRoute);

// Default route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Maa Baglamukhi Backend is running." });
});

module.exports = (req, res) => {
  app(req, res);
};
