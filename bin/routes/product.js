const Router = require("express").Router();
const productController = require("../controllers/product");
const authMiddleware = require("../middlewares/authCheck");

// add Product
Router.post("/add", authMiddleware.checkAdmin, productController.addProduct);

// Update Product
Router.post(
  "/update",
  authMiddleware.checkAdmin,
  productController.updateProduct
);

// Delete Product
Router.delete(
  "/delete/:id",
  authMiddleware.checkAdmin,
  productController.deleteProduct
);

// Get All Product
Router.get("/getAll", productController.getAllProducts);

// Get Product By Id
Router.get("/:id", productController.getProductById);

module.exports = Router;
