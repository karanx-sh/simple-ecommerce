const Router = require("express").Router();
const userController = require("../controllers/user");

// User Singup
Router.post("/signup", userController.signup);

// User Login
Router.post("/login", userController.login);

// User Refresh Token
Router.post("/refresh", userController.refresh);

module.exports = Router;
