const express = require("express");
const router = express.Router();
const template = require("../dataTemplate.js");
const { data } = require("../data.json");

//added error handler on /project/:id route
router.get("/:id", (req, res, next) => {
  const project = req.params.id;
  if (project > data.length - 1) {
    const err = new Error("This project's link does not exist");
    err.status = 404;
    return next(err);
  }
  res.render("project", template(project));
});

module.exports = router;
