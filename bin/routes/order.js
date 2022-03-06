const Router = require("express").Router();
const orderController = require("../controllers/order");
const authMiddleware = require("../middlewares/authCheck");

// place order
Router.get("/place", authMiddleware.checkUser, orderController.placeOrder);

// view all orders by user
Router.get(
  "/getAll",
  authMiddleware.checkUser,
  orderController.viewAllOrderUser
);
// view order by id user

// view all order admin
Router.get(
  "/admin/getAll",
  authMiddleware.checkAdmin,
  orderController.viewAllOrderAdmin
);
// view order by id admin

// edit order admin

module.exports = Router;
