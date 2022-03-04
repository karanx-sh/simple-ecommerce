const User = require("../models/user.js");
const moment = require("moment-timezone");
const customError = require("../custom/errors");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");

const {
  tokenGenerator,
  random,
  makeRandom,
  message,
  compareTime,
  generateOTP,
  hashPassword,
  sendMail,
} = require("../custom/functions");

exports.signup = async (req, res) => {
  try {
    if (
      !req.body.email ||
      !req.body.name ||
      !req.body.phoneNumber ||
      req.body.phoneNumber.length != 10 ||
      !req.body.address
    )
      throw customError.dataInvalid;
    let user = await User.findOne({
      where: {
        [Op.or]: [
          { email: req.body.email },
          { phoneNumber: req.body.phoneNumber },
        ],
        deleted: false,
      },
    });

    user = await User.create({
      fullname: req.body.fullname,
      email: req.body.email,
      number: req.body.number,
      password: req.body.password,
      OTP: generateOTP(4, req.body.number),
    });
    sendMail(user.OTP.code, user.email, "Email Otp");

    res.status(200).json({
      error: false,
      details: {
        message: "User registered successfully",
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
