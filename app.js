const express = require("express");
const body = require("body-parser");
const router = require("./routes/index");
const projectRoute = require("./routes/project");
const app = express();

// Static files server
app.use("/static", express.static("public"));

//view engine === pug
app.set("view engine", "pug");

//main route
app.use("/", router);

// About route
app.use("/about", router);

// Individual projects route
app.use("/project", router);
app.use("/project", projectRoute);

// Error middleware
app.use((req, res, next) => {
  const err = new Error("Oups! This page does not exist");
  err.status = 404;
  next(err);
});

// global error handler
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status = err.status;
  res.render("error");
});

//serving port for Heroku deployment
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0");
