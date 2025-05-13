const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const contactUsRoute = require("./contactUs");

const app = express();

// Set CORS options
const corsOptions = {
  origin: "https://maabaglamukhi.vercel.app", // Allow request onely from this domain
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP Methodes
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed Header
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/contact", contactUsRoute);

module.exports = app; 
