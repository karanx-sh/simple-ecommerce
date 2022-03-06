require("dotenv/config");
const express = require("express");
const app = express();
const Mongoose = require("mongoose");

const CustomError = require("./bin/helpers/error");

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

app.use("/public", express.static("uploads/"));

//API Routes Imports
const userRoutes = require("./bin/routes/user");
const adminRoutes = require("./bin/routes/admin");
const productRoutes = require("./bin/routes/product");
const cartRoutes = require("./bin/routes/cart");
const orderRoutes = require("./bin/routes/order");

//API Routes INIT
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);
app.use("/order", orderRoutes);

//FRONTEND ROUTES IMPORT
const adminUIRoutes = require("./bin/routes/frontend/admin");
const userUIRoutes = require("./bin/routes/frontend/user");

//FRONTEND ROUTES INIT
app.use("/ui/admin", adminUIRoutes);
app.use("/", userUIRoutes);

//******* ERROR HANDLING *******\\
app.use((req, res, next) => {
  const error = new CustomError(
    "Not Found!",
    `Uh oh! the path you are trying to reach we can't find it, we've checked each an every corner!`,
    404
  );
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.code || 500).json({
    error: true,
    details: error,
  });
});

module.exports = app;
