const Order = require("../models/order");
const Product = require("../models/product");

const getUserOrder = async (req, res) => {
  const {id: _id} = req.params;
  try {
    const ordersUser = await Order.find({idUser: _id});

    res.status(200).json(ordersUser);
  } catch (err) {
    res.status(400).send({message: err.message});
  }
};

const getAllUsersOrders = async (req, res) => {
  try {
    const ordersUsers = await Order.find();

    res.status(200).json(ordersUsers);
  } catch (err) {
    res.status(400).send({message: err.message});
  }
};

const createOrder = async (req, res) => {
  const newOrder = req.body;
  try {
    const order = await new Order(newOrder);
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).send({message: err.message});
  }
};

const upadteOrder = async (req, res) => {
  const updates = req.body;
  const {id: _id} = req.params;
  try {
    // const order = await Order.findOne({idUser: req.userId});
    // order.products.push(updates);
    const updatedOrder = await Order.findOneAndUpdate(_id, updates, {
      new: true,
    });
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(400).send({message: err.message});
  }
};
//delete order
const deleteOrder = async (req, res) => {
  const {id: _id} = req.params;
  try {
    // const order = await Order.findOne({idUser: req.userId});
    // order.products.push(updates);
    await Order.findByIdAndDelete(_id);
    res.status(200).json({message: "removed order in successfully!"});
  } catch (err) {
    res.status(400).send({message: err.message});
  }
};

module.exports = {
  createOrder,
  upadteOrder,
  deleteOrder,
  getUserOrder,
  getAllUsersOrders,
};
