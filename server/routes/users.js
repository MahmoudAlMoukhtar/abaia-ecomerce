const express = require("express");
const {
  signin,
  signup,
  fetchAllUsers,
  deleteUserById,
  fetchUserById,
} = require("../controller/users");
const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/", fetchAllUsers);
router.get("/:id", fetchUserById);
router.delete("/:id", deleteUserById);

module.exports = router;
