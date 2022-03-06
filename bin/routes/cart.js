const Router = require("express").Router();
const cartController = require("../controllers/cart");
const authMiddleware = require("../middlewares/authCheck");

// Add to Cart
Router.post("/add", authMiddleware.checkUser, cartController.addToCart);

// Update Cart
Router.post("/update", authMiddleware.checkUser, cartController.updateCart);

// Remove Cart
Router.delete(
  "/delete/:id",
  authMiddleware.checkUser,
  cartController.removeFromCart
);

// get Cart
Router.get("/getAll", authMiddleware.checkUser, cartController.getAllCart);

//get Cart By Id
Router.get("/:id", authMiddleware.checkUser, cartController.getCartById);

module.exports = Router;
