const Router = require("express").Router();

Router.get("/", (req, res) => {
  res.render("admin/index", { API: process.env.API_URL });
});

Router.get("/login", (req, res) => {
  res.render("admin/login", { API: process.env.API_URL });
});

module.exports = Router;
