const Cart = require("../models/cart");
const Product = require("../models/product");

const getProductsCartByIdUser = async (req, res) => {
  try {
    let productsDetailes = [];
    const productsCart = await Cart.findOne({idUser: req.userId});

    if (productsCart.products.length > 0) {
      for (let product of productsCart.products) {
        if (Object.keys(product).length < 1) continue;
        const detailProduct = await Product.findById(product.idProduct);
        //console.log(productsCart.products);
        productsDetailes.push({
          ...detailProduct._doc,
          quantity: product.quantity,
        });
      }
    }

    res.status(200).json(productsDetailes);
  } catch (err) {}
};

const createCart = async (req, res) => {
  const products = req.body;
  // console.log("userId");
  // console.log(req.userId);
  try {
    const cart = await new Cart({
      idUser: req.userId,
      products: products,
    });
    await cart.save();
    res.status(201).json(cart);
  } catch (err) {
    res.status(400).send({message: err.message});
  }
};

const upadteCart = async (req, res) => {
  const updates = req.body;
  try {
    const cart = await Cart.findOne({idUser: req.userId});
    cart.products.push(updates);
    const updatedCartProducts = await Cart.findOneAndUpdate(
      {idUser: req.userId},
      cart,
      {
        new: true,
      }
    );
    res.status(200).json(updatedCartProducts);
  } catch (err) {
    res.status(400).send({message: err.message});
  }
};

const emptyCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({idUser: req.userId});
    cart.products = [];
    const updatedCartProducts = await Cart.findOneAndUpdate(
      {idUser: req.userId},
      cart,
      {
        new: true,
      }
    );
    res.status(200).json(updatedCartProducts);
  } catch (err) {
    res.status(400).send({message: err.message});
  }
};

module.exports = {
  getProductsCartByIdUser,
  createCart,
  upadteCart,
  emptyCart,
};
