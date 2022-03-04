const mongoose = require("mongoose");

const moment = require("moment-timezone");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    validate: {
      validator: (value) => value.length != 10,
      message: (v) => `${v.value} is Invalid Phone Number`,
    },
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: [
    {
      street: {
        type: String,
        required: true,
      },
      pincode: {
        type: Number,
        required: true,
      },
      selected: {
        type: Boolean,
        default: false,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: moment.tz(Date.now(), "Asia/Kolkata").toString(),
  },
  updatedAt: {
    type: Date,
    default: moment.tz(Date.now(), "Asia/Kolkata").toString(),
  },
});

UserSchema.pre("save", function (next) {
  this.updatedAt = moment.tz(Date.now(), "Asia/Kolkata").toString();
  next();
});

module.exports = mongoose.model("User", UserSchema);
