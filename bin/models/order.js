const mongoose = require("mongoose");
const moment = require("moment-timezone");

const User = require("./user");
const Product = require("./product");
const Cart = require("./cart");

const { random } = require("../helpers/auxiliary");

const OrderSchema = new mongoose.Schema({
  InvoiceId: {
    type: String,
    default: () => `S-ECOM-${random(8)}`,
  },
  UserId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  PurchasedProducts: [
    {
      product: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
        default: 1,
      },
      price: {
        type: Number,
      },
    },
  ],
  TotalPrice: {
    type: Number,
    default: 0,
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

OrderSchema.pre("save", function (next) {
  this.updatedAt = moment.tz(Date.now(), "Asia/Kolkata").toString();
  next();
});

OrderSchema.post("save", function () {
  let totalPrice = 0;
  this.PurchasedProducts.map((purchase) => {
    totalPrice += purchase.quantity * purchase.price;
  });
  this.TotalPrice = totalPrice;
});

module.exports = mongoose.model("Order", OrderSchema);
