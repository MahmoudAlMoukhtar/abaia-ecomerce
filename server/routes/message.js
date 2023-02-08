const express = require("express");
const Message = require("../models/message");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
});

router.post("/", async (req, res) => {
  const dataMsg = req.body;

  try {
    const newProduct = await new Product(dataMsg);
    const Msg = await newProduct.save();
    res.status(200).json(Msg);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
});

module.exports = router;
