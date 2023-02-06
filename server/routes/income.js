const express = require("express");
const Order = require("../models/order");
//const authMW = require("../middleware/authMw");

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("income");
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  try {
    const income = await Order.aggregate([
      {$match: {createdAt: {$gte: previousMonth}}},

      {
        $project: {
          month: {$month: "$createdAt"},
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: {$sum: "$sales"},
        },
      },
    ]);
    console.log("income");
    console.log(income);
    res.status(200).json(income);
  } catch (err) {
    res.status(400).send({message: err.message});
  }
});

module.exports = router;
