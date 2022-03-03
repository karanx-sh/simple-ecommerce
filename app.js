require("dotenv/config");
const express = require("express");
const app = express();

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
