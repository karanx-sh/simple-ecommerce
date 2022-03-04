require("dotenv/config");
const express = require("express");
const app = express();
const Mongoose = require("mongoose");

const PROD_MONGO_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.t55j0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const DEV_MONGO_URL = "mongodb://127.0.0.1:27017/simple-ecom";

Mongoose.connect(DEV_MONGO_URL, () => {
  console.log("Connected To Mongo");
});

app.set("view engine", "ejs");
app.use(express.json());
app.use(require("body-parser").json());
app.use(require("body-parser").urlencoded({ extended: true, limit: "100mb" }));
app.use(require("body-parser").json({ limit: "100mb" }));

app.use("/uploads", express.static("uploads/"));

//Routes Imports
const userRoutes = require("./bin/routes/user");
const adminRoutes = require("./bin/routes/admin");

// Routes INIT
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    hello: "world",
  });
});

module.exports = app;
