const moment = require("moment-timezone");
const customError = require("../helpers/errors");

const User = require("../models/user");
const Product = require("../models/product");
const Cart = require("../models/cart");

exports.addToCart = async (req, res) => {
  try {
    if (!req.body.id) throw customError.dataInvalid;
    let product = await Product.findById(req.body.id);
    if (!product) throw customError.dataNotFound;
    let cart = await Cart.create({
      quantity: req.body.quantity || 1,
      UserId: req.user.id,
      ProductId: product.id,
    });
    res.status(200).json({
      error: false,
      message: "Added To The Cart",
      data: cart,
    });
  } catch (error) {
    console.log(`***** ERROR : ${req.originalUrl} ${error}`);
    return res.status(error.code).json({
      error: true,
      details: error,
    });
  }
};

exports.updateCart = async (req, res) => {
  try {
    if (!req.body.id) throw customError.dataInvalid;
    let cart = await Cart.findOne({ _id: req.body.id, UserId: req.user.id });
    if (!cart) throw customError.dataNotFound;
    console.log(cart);
    cart = await cart.update({
      quantity: req.body.quantity || 1,
    });
    res.status(200).json({
      error: false,
      message: "Cart Updated",
      data: cart,
    });
  } catch (error) {
    console.log(`***** ERROR : ${req.originalUrl} ${error}`);
    return res.status(error.code).json({
      error: true,
      details: error,
    });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    if (!req.params.id) throw customError.dataInvalid;
    let cart = await Cart.deleteOne({
      _id: req.params.id,
      UserId: req.user.id,
    });
    res.status(200).json({
      error: false,
      message: "Removed From Cart",
      data: cart,
    });
  } catch (error) {
    console.log(`***** ERROR : ${req.originalUrl} ${error}`);
    return res.status(error.code).json({
      error: true,
      details: error,
    });
  }
};

exports.getAllCart = async (req, res) => {
  try {
    let carts = await Cart.find({ UserId: req.user.id }).populate("ProductId", {
      createdAt: 0,
      updatedAt: 0,
    });
    res.status(200).json({
      error: false,
      message: "Cart Found",
      data: carts,
    });
  } catch (error) {
    console.log(`***** ERROR : ${req.originalUrl} ${error}`);
    return res.status(error.code).json({
      error: true,
      details: error,
    });
  }
};

exports.getCartById = async (req, res) => {
  try {
    if (!req.params.id) throw customError.dataInvalid;
    let carts = await Cart.find({
      UserId: req.user.id,
      _id: req.params.id,
    }).populate("ProductId", {
      createdAt: 0,
      updatedAt: 0,
    });
    res.status(200).json({
      error: false,
      message: "Cart Found",
      data: carts,
    });
  } catch (error) {
    console.log(`***** ERROR : ${req.originalUrl} ${error}`);
    return res.status(error.code).json({
      error: true,
      details: error,
    });
  }
};
