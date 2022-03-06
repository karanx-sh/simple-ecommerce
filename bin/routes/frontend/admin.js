const Router = require("express").Router();

Router.get("/", (req, res) => {
  res.render("admin/index");
});

module.exports = Router;
