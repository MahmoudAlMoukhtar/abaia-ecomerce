const mongooose = require("mongoose");

const orderSechma = mongooose.Schema(
  {
    idUser: {
      type: String,
    },
    Username: {
      type: String,
    },
    nameProduct: {
      type: String,
    },
    idProduct: {
      type: String,
    },
    sizeProduct: {
      type: String,
    },
    lengthProduct: {
      type: String,
    },
    designProduct: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    address: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  {timestamps: true}
);

const Order = mongooose.model("Order", orderSechma);

module.exports = Order;
