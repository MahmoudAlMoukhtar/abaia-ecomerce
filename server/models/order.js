const mongooose = require("mongoose");

const orderSechma = mongooose.Schema(
  {
    idUser: {
      type: String,
    },
    Username: {
      type: String,
    },
    products: {
      type: [Object],
      default: [],
    },
    amount: {
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
