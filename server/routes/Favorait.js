const express = require("express");
const {
  createOrder,
  upadteOrder,
  deleteOrder,
  getUserOrder,
  getAllUsersOrders,
} = require("../controller/order");
const authMW = require("../middleware/authMW");
const Favorait = require("../models/favorait");
const Product = require("../models/product");

const router = express.Router();

//router.get("/", authMW, getProductsCartByIdUser);
router.get("/", authMW, getAllUsersOrders);
router.get("/:id", authMW, async (req, res) => {
  const {id: _id} = req.params;
  //console.log(_id);
  try {
    let productsDetailes = [];
    const favoraitUser = await Favorait.find({idUser: _id});
    if (favoraitUser.length > 0) {
      for (let product of favoraitUser) {
        if (Object.keys(product).length < 1) continue;
        const detailProduct = await Product.findById(product.idProduct);
        productsDetailes.push(detailProduct);
      }
    }
    console.log(favoraitUser);
    res.status(200).json(productsDetailes);
  } catch (err) {
    res.status(400).send({message: err.message});
  }
});
router.post("/", authMW, async (req, res) => {
  const newFavorait = req.body;
  console.log(newFavorait);
  const favoraitUserExist = await Favorait.findOne({
    idProduct: newFavorait.idProduct,
  });
  if (favoraitUserExist) {
    await Favorait.findOneAndDelete({idProduct: newFavorait.idProduct});
    return res
      .status(200)
      .json({message: "remove this product from favorait success!"});
  }
  try {
    const favorait = await new Favorait(newFavorait);
    const savedFavorait = await favorait.save();
    res.status(201).json(savedFavorait);
  } catch (err) {
    res.status(400).send({message: err.message});
  }
});
router.put("/:id", authMW, upadteOrder);
router.delete("/:id", deleteOrder);

module.exports = router;
