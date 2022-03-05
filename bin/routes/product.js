const Router = require("express").Router();
const productController = require("../controllers/product");

// add Product
Router.post("/add", productController.addProduct);

// Update Product
Router.post("/update", productController.updateProduct);

// Delete Product
Router.delete("/delete/:id", productController.deleteProduct);

// Get All Product
Router.get("/getAll", productController.getAllProducts);

// Get Product By Id
Router.get("/:id", productController.getProductById);

module.exports = Router;
