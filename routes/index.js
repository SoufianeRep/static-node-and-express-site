const express = require("express");
const router = express.Router();
const { data } = require("../data.json");

router.get("/", (req, res, next) => {
  res.render("index", { projects: data });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/project", (req, res) => {
  res.redirect("/project/0");
});

module.exports = router;
