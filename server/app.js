const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("server is running");
});

dotenv.config({ path: "./config.env" });
require("./db/conn");

app.use(express.json());
//we link the router files to make our route easy
app.use(require("./router/auth"));

const PORT = process.env.PORT;

//Middleware
const middleware = (req, res, next) => {
  console.log("Hello middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", middleware, (req, res) => {
  console.log("completed middleware");
  res.send("Hello about");
});

app.get("/contact", (req, res) => {
  res.send("Hello contact");
});

app.get("/signin", (req, res) => {
  res.send("Hello SignIn");
});

app.get("/signup", (req, res) => {
  res.send("Hello SignUp");
});
