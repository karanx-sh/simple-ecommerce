const mongoose = require("mongoose");
const moment = require("moment-timezone");

const User = require("./user");
const Product = require("./product");

const CartSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    default: 1,
  },
  UserId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  ProductId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Product",
  },
  createdAt: {
    type: Date,
    default: moment.tz(Date.now(), "Asia/Kolkata").toString(),
  },
  updatedAt: {
    type: Date,
    default: moment.tz(Date.now(), "Asia/Kolkata").toString(),
  },
});

CartSchema.pre("save", function (next) {
  this.updatedAt = moment.tz(Date.now(), "Asia/Kolkata").toString();
  next();
});

module.exports = mongoose.model("Cart", CartSchema);
