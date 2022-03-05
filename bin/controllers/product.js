const customError = require("../helpers/errors");
const Product = require("../models/product");

exports.addProduct = async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.image ||
      !req.body.price ||
      !req.body.description
    )
      throw customError.dataInvalid;

    let product = await Product.create({
      name: req.body.name,
      image: req.body.image,
      price: req.body.price,
      description: req.body.description,
    });
    res.status(200).json({
      error: false,
      message: "Product Added Successfully",
      data: product,
    });
  } catch (error) {
    console.log(`***** ERROR : ${req.originalUrl} ${error}`);
    console.log(`***** ERROR : ${req.originalUrl} ${error}`);
    return res.status(error.code).json({
      error: true,
      details: error,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    if (!req.body.id) throw customError.dataInvalid;

    let product = await Product.findById(req.body.id);

    product = await product.update({
      name: req.body.name,
      image: req.body.image,
      price: req.body.price,
      description: req.body.description,
    });
    res.status(200).json({
      error: false,
      message: "Product Updated Successfully",
      data: product,
    });
  } catch (error) {
    console.log(`***** ERROR : ${req.originalUrl} ${error}`);
    return res.status(error.code).json({
      error: true,
      details: error,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    if (!req.params.id) throw customError.dataInvalid;
    let product = await Product.deleteOne({ _id: req.params.id });
    res.status(200).json({
      error: false,
      message: "product deleted successfully",
    });
  } catch (error) {
    console.log(`***** ERROR : ${req.originalUrl} ${error}`);
    return res.status(error.code).json({
      error: true,
      details: error,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    let products = await Product.find();
    res.status(200).json({
      error: false,
      message: "Products Found!",
      data: products,
    });
  } catch (error) {
    console.log(`***** ERROR : ${req.originalUrl} ${error}`);
    return res.status(error.code).json({
      error: true,
      details: error,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    if (!req.params.id) throw customError.dataInvalid;
    let product = await Product.findById(req.params.id);
    if (!product) throw customError.dataNotFound;
    res.status(200).json({
      error: false,
      message: "Data Found!",
      data: product,
    });
  } catch (error) {
    console.log(`***** ERROR : ${req.originalUrl} ${error}`);
    return res.status(error.code).json({
      error: true,
      details: error,
    });
  }
};
