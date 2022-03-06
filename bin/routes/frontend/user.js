const Router = require("express").Router();

Router.get("/", (req, res) => {
  res.render("user/index", { API: process.env.API_URL });
});

Router.get("/login", (req, res) => {
  res.render("user/login", { API: process.env.API_URL });
});

Router.get("/signup", (req, res) => {
  res.render("user/register", { API: process.env.API_URL });
});

Router.get("/cart", (req, res) => {
  res.render("user/cart", { API: process.env.API_URL });
});

Router.get("/orders", (req, res) => {
  res.render("user/myOrders", { API: process.env.API_URL });
});

module.exports = Router;
