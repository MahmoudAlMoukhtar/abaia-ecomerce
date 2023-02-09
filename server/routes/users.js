const express = require("express");
const {
  signin,
  signup,
  fetchAllUsers,
  deleteUserById,
  fetchUserById,
  updateUserById,
  fetchFavoraitProducts,
  updateFavoraitProductsById,
  updatePasswordUserById,
} = require("../controller/users");
const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/", fetchAllUsers);
router.get("/:id", fetchUserById);
router.delete("/:id", deleteUserById);
router.put("/:id", updateUserById);
router.put("/password/:id", updatePasswordUserById);
router.get("/favorait/:id", fetchFavoraitProducts);
router.post("/favorait/:id", updateFavoraitProductsById);
//router.delete("/favorait/:id", updateFavoraitProductsById);

module.exports = router;
