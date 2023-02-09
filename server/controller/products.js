const {default: mongoose} = require("mongoose");
const Product = require("../models/product");
const {cloudinary} = require("../utils/cloudinary");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const createProduct = async (req, res) => {
  const {
    name,
    price,
    category,
    description,
    stock,
    image,
    sizes,
    lengthes,
    designes,
  } = req.body;
  try {
    const uploadedCloudniary = await cloudinary.uploader.upload(image, {
      upload_preset: "ml_default",
    });
    const newProduct = await new Product({
      name,
      price,
      category,
      description,
      stock,
      sizes,
      lengthes,
      designes,
      image: uploadedCloudniary.url,
    });
    const newProd = await newProduct.save();
    //console.log(newProduct);
    res.status(201).json(newProd);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const getProductById = async (req, res) => {
  const {id: _id} = req.params;
  try {
    const product = await Product.findById(_id);
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const deleteProductById = async (req, res) => {
  const {id: _id} = req.params;
  try {
    const product = await Product.findByIdAndDelete(_id);
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const updateProduct = async (req, res) => {
  const {id: _id} = req.params;
  const updates = req.body;
  try {
    const uploadedCloudniary = await cloudinary.uploader.upload(updates.image, {
      upload_preset: "ml_default",
    });
    const product = await Product.findByIdAndUpdate(
      _id,
      {...updates, image: uploadedCloudniary.url},
      {
        new: true,
      }
    );
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

module.exports = {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProductById,
};
