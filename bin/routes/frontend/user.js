const Router = require("express").Router();

Router.get("/", (req, res) => {
  res.render("user/index");
});

Router.get("/login", (req, res) => {
  res.render("user/login");
});

Router.get("/cart", (req, res) => {
  res.render("user/cart");
});

module.exports = Router;
