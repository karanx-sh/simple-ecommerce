const Router = require("express").Router();
const adminController = require("../controllers/admin");

// admin Singup
Router.post("/signup", adminController.signup);

// admin Login
Router.post("/login", adminController.login);

// admin Refresh Token
Router.post("/refresh", adminController.refresh);

module.exports = Router;
