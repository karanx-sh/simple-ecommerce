const jwt = require("jsonwebtoken");
const moment = require("moment-timezone");

const customError = require("../helpers/errors");
const User = require("../models/user");

exports.checkUser = async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw customError.authFailed;
    let access = req.headers.authorization.split(" ")[1];
    let decodedUser = jwt.verify(access, process.env.JWT_KEY);
    req.user = await User.findOne({ _id: decodedUser.id, role: "USER" });
    if (!req.user) throw customError.authFailed;
    next();
  } catch (error) {
    console.log(error);
    return res.status(error.code || 401).json({
      error: true,
      details: {
        code: error.code || 401,
        name: error.name || "Authorization Failed!",
        message: `Uh oh! i can't tell you anymore #BruteForcers! alert`,
      },
    });
  }
};

exports.checkAdmin = async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw customError.authFailed;
    let access = req.headers.authorization.split(" ")[1];
    let decodedUser = jwt.verify(access, process.env.JWT_KEY);
    req.user = await User.findOne({ _id: decodedUser.id, role: "ADMIN" });
    if (!req.user) throw customError.authFailed;
    next();
  } catch (error) {
    console.log(error);
    return res.status(error.code || 401).json({
      error: true,
      details: {
        code: error.code || 401,
        name: error.name || "Authorization Failed!",
        message: `Uh oh! i can't tell you anymore #BruteForcers! alert`,
      },
    });
  }
};
