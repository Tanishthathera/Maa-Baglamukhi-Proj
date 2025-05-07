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
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed Headers
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Add explicit OPTIONS handler for /contact to handle preflight requests
app.options("/contact", cors(corsOptions));

app.use("/contact", contactUsRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
