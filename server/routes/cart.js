const express = require("express");
const {
  getProductsCartByIdUser,
  createCart,
  upadteCart,
  emptyCart,
  deleteProductById,
} = require("../controller/cart");
const authMW = require("../middleware/authMW");

const router = express.Router();

router.get("/", authMW, getProductsCartByIdUser);
router.post("/", authMW, createCart);
router.put("/", authMW, upadteCart);
router.patch("/", authMW, emptyCart);
router.delete("/:id", authMW, deleteProductById);

module.exports = router;
