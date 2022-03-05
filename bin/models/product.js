const mongoose = require("mongoose");

const moment = require("moment-timezone");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: moment.tz(Date.now(), "Asia/Kolkata").toString(),
    },
    updatedAt: {
      type: Date,
      default: moment.tz(Date.now(), "Asia/Kolkata").toString(),
    },
  },
  {
    toObject: { getters: true, setters: true },

    toJSON: { getters: true, setters: true },

    runSettersOnQuery: true,
  }
);

productSchema.pre("save", function (next) {
  this.updatedAt = moment.tz(Date.now(), "Asia/Kolkata").toString();
  next();
});

productSchema.virtual("image_link").get(function () {
  return `${process.env.CDN_LINK}${this.image}`;
});

module.exports = mongoose.model("Product", productSchema);
