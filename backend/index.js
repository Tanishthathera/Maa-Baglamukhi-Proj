const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const contactUsRoute = require("./contactUs");

const app = express();

// CORS config
app.use(
  cors({
    origin: "https://maabaglamukhi.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type","Authorization"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.options('/contact', cors(corsOptions));

// Health check route
app.get("/", (req, res) => {
  res.send("Maa Baglamukhi Backend is running.");
});

// Main route
app.use("/contact", contactUsRoute);

// Export for Vercel
module.exports = app;
