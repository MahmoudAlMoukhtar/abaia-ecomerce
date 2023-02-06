const express = require("express");
const {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProductById,
} = require("../controller/products.js");
const authMW = require("../middleware/authMW");
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProductById);

// router.Product("/", authMW,createProduct)
// router.patch("/:id", authMW,updateProduct)
// router.patch("/:id/likeProduct", authMW,likeProduct)
// router.delete("/:id", authMW,deletProduct)

module.exports = router;
