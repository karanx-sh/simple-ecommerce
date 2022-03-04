require("dotenv/config");
const express = require("express");
const app = express();
const Mongoose = require("mongoose");

Mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.t55j0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  () => {
    console.log("Connected To Mongo");
  }
);

const User = require("./bin/models/user");
run();
async function run() {
  let user = await User.create({
    name: "karan",
    phoneNumber: 8169157715,
    email: "karan2000patil@gmail.com",
    address: [
      {
        street: "Loream sfd, sfffw,",
        pincode: 400011,
      },
    ],
  });
  console.log(user);
}

app.set("view engine", "ejs");
app.use(express.json());
app.use(require("body-parser").json());
app.use(require("body-parser").urlencoded({ extended: true, limit: "100mb" }));
app.use(require("body-parser").json({ limit: "100mb" }));

app.use("/uploads", express.static("uploads/"));

app.get("/", (req, res) => {
  res.status(200).json({
    hello: "world",
  });
});

module.exports = app;
