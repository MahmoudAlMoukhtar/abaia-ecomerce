const express = require("express");
const {
  getProductsCartByIdUser,
  createCart,
  upadteCart,
  emptyCart,
} = require("../controller/cart");
const authMW = require("../middleware/authMw");

const router = express.Router();

router.get("/", authMW, getProductsCartByIdUser);
router.post("/", authMW, createCart);
router.put("/", authMW, upadteCart);
router.patch("/", authMW, emptyCart);

module.exports = router;
