const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRoute = require("./routes/author");
const bookRoute = require("./routes/book");

dotenv.config();

//Connect to db
mongoose.connect(process.env.mongoosedbURL, () => {
  console.log("Connect to database Sucessfully!!!");
});

app.get("/api", (req, res) => {
  res.status(200).json("Hello World");
});

dotenv.config();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRoute);

app.listen(4000, () => {
  console.log("App is running!!!");
});
