const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    ThumImages: {
      type: [String],
      default: [],
    },
    favoraitCount: {
      type: Number,
      default: 0,
    },
    numberSell: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
    },
    stock: {
      type: Number,
      default: 0,
    },
    active: {
      type: Boolean,
      default: true,
    },
    standard: {
      type: {
        size: String,
        length: String,
        design: String,
      },
    },
  },
  {timestamps: true}
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
