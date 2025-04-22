const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const contactUsRoute = require("./contactUs");

const app = express();
const port = process.env.PORT || 19010;

app.use(cors());
app.use(bodyParser.json());
app.use("/contact", contactUsRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
