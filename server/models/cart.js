const mongooose = require("mongoose");

const cartSechma = mongooose.Schema(
  {
    idUser: {
      type: String,
    },
    products: {
      type: [Object],
    },
  },
  {timestamps: true}
);

const Cart = mongooose.model("Cart", cartSechma);

module.exports = Cart;
