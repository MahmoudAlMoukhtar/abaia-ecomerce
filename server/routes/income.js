const express = require("express");
const Order = require("../models/order");
//const authMW = require("../middleware/authMw");

const router = express.Router();

router.get("/", async (req, res) => {
  //console.log("income");
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      {$match: {createdAt: {$gte: previousMonth}}},
      {
        $project: {
          month: {$month: "$createdAt"},
          sales: "$price",
        },
      },
      {
        $group: {
          _id: "$month",
          total: {$sum: "$sales"},
        },
      },
    ]);
    //console.log("income");

    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/allSales", async (req, res) => {
  console.log("income");

  try {
    const income = await Order.aggregate([
      {
        $project: {
          _id: 0,
          sales: "$price",
        },
      },
      {
        $group: {
          _id: "",
          total: {$sum: "$sales"},
        },
      },
    ]);

    console.log(income);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/allSalesProduct/:id", async (req, res) => {
  const {id: _id} = req.params;
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      {$match: {idProduct: {$gte: _id}, createdAt: {$gte: previousMonth}}},
      {
        $project: {
          month: {$month: "$createdAt"},
          sales: "$price",
        },
      },
      {
        $group: {
          month: "$month",
          total: {$sum: "$sales"},
        },
      },
    ]);

    console.log(income);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
