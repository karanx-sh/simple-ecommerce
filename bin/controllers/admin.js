const moment = require("moment-timezone");
const customError = require("../helpers/errors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/user");
const Product = require("../models/product");
const Cart = require("../models/cart");
const Order = require("../models/order");

const {
  tokenGenerator,
  random,
  makeRandom,
  message,
  compareTime,
  generateOTP,
  hashPassword,
  sendMail,
} = require("../helpers/auxiliary");

exports.signup = async (req, res) => {
  try {
    if (
      !req.body.email ||
      !req.body.name ||
      !req.body.phoneNumber ||
      !req.body.password
    )
      throw customError.dataInvalid;

    let user = await User.findOne({
      $or: [{ phoneNumber: req.body.phoneNumber }, { email: req.body.email }],
    });
    if (user) throw customError.userExists;

    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password,
      address: req.body.address,
      role: "ADMIN",
    });

    res.status(200).json({
      error: false,
      details: {
        message: "Admin registered successfully",
      },
    });
  } catch (error) {
    console.log(`***** ERROR : ${req.originalUrl} ${error}`);
    return res.status(error.code).json({
      error: true,
      details: error,
    });
  }
};

exports.login = async (req, res) => {
  try {
    if (!req.body.phoneNumber || !req.body.password)
      throw customError.dataInvalid;
    let user = await User.findOne({
      phoneNumber: req.body.phoneNumber,
      role: "ADMIN",
    });
    if (!user) throw customError.userNotFound;
    if (!bcrypt.compareSync(req.body.password, user.password))
      throw customError.authFailed;
    res.status(200).json({
      error: false,
      details: {
        token: await tokenGenerator(user),
        user: user,
      },
    });
  } catch (error) {
    console.log(`***** ERROR : ${req.originalUrl} ${error}`);
    return res.status(error.code).json({
      error: true,
      details: error,
    });
  }
};

exports.refresh = async (req, res) => {
  try {
    let access = req.body.access,
      refresh = req.body.refresh;

    if (!access || !refresh) throw customError.dataInvalid;
    let decodedRefresh = jwt.verify(refresh, process.env.JWT_KEY);

    req.user = await User.findOne({ _id: decodedRefresh.id });

    if (!req.user) throw customError.authFailed;
    res.status(200).json({
      error: false,
      details: {
        message: "Token Refreshed Sucessfully!",
        token: await tokenGenerator(req.user),
      },
    });
  } catch (error) {
    console.log(`***** ERROR : ${req.originalUrl} ${error}`);
    return res.status(error.code || 401).json({
      error: true,
      details: error || {
        code: 401,
        name: "Authorization Failed! - Devloper Defined Error!",
        message: "Uh oh! i can't tell you anymore #BruteForcers! alert",
      },
    });
  }
};
