const moment = require("moment-timezone");
const customError = require("../helpers/errors");

const User = require("../models/user");
const Product = require("../models/product");
const Cart = require("../models/cart");
const Order = require("../models/order");

exports.placeOrder = async (req, res) => {
  try {
    let carts = await Cart.find({ UserId: req.user.id }).populate("ProductId", {
      createdAt: 0,
      updatedAt: 0,
    });
    if (carts.length == 0) throw customError.badRequest;
    let purchasedProducts = [];
    carts.map((c) => {
      purchasedProducts.push({
        product: c.ProductId.id,
        quantity: c.quantity,
        price: c.ProductId.price,
      });
    });
    let order = await Order.create({
      UserId: req.user.id,
      PurchasedProducts: purchasedProducts,
    });
    res.status(200).json({
      error: false,
      message: "Order Placed Successfully!",
      data: order,
    });
  } catch (error) {
    console.log(`***** ERROR : ${req.originalUrl} ${error}`);
    return res.status(error.code).json({
      error: true,
      details: error,
    });
  }
};

exports.viewAllOrderUser = async (req, res) => {
  try {
    let orders = await Order.find({ UserId: req.user.id }).populate(
      "PurchasedProducts.product",
      {
        createdAt: 0,
        updatedAt: 0,
      }
    );
    res.status(200).json({
      error: false,
      message: "Orders",
      data: orders,
    });
  } catch (error) {
    console.log(`***** ERROR : ${req.originalUrl} ${error}`);
    return res.status(error.code).json({
      error: true,
      details: error,
    });
  }
};

exports.viewAllOrderAdmin = async (req, res) => {
  try {
    let orders = await Order.find()
      .populate("PurchasedProducts.product", {
        createdAt: 0,
        updatedAt: 0,
      })
      .populate("UserId", {
        createdAt: 0,
        updatedAt: 0,
        password: 0,
        tokens: 0,
      });
    res.status(200).json({
      error: false,
      message: "Data found",
      data: orders,
    });
  } catch (error) {
    console.log(`***** ERROR : ${req.originalUrl} ${error}`);
    return res.status(error.code).json({
      error: true,
      details: error,
    });
  }
};
