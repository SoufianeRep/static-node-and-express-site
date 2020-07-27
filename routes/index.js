const express = require("express");
const router = express.Router();
const { data } = require("../data.json");

//main page
router.get("/", (req, res, next) => {
  res.render("index", { projects: data });
});

//about
router.get("/about", (req, res) => {
  res.render("about");
});

//redirect for /project to the first project page
router.get("/project", (req, res) => {
  res.redirect("/project/0");
});

module.exports = router;
