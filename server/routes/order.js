const express = require("express");
const {
  createOrder,
  upadteOrder,
  deleteOrder,
  getUserOrder,
  getAllUsersOrders,
} = require("../controller/order");
const authMW = require("../middleware/authMw");

const router = express.Router();

//router.get("/", authMW, getProductsCartByIdUser);
router.get("/", authMW, getAllUsersOrders);
router.get("/:id", authMW, getUserOrder);
router.post("/", authMW, createOrder);
router.put("/:id", authMW, upadteOrder);
router.delete("/:id", authMW, deleteOrder);

module.exports = router;
