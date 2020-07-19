const express = require("express");
const body = require("body-parser");
const app = express();

app.get("/", (req, res, next) => {
  res.write("<h1> heeeeer you go</h1>");
});

app.listen(3000, "localhost");
console.log("its working");
