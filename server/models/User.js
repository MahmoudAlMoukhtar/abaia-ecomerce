const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    mobileNumber: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    address: {type: String},
    city: {type: String},
    state: {type: String},
    zipCode: {type: String},
    favoraitProducts: {
      type: [Object],
      default: [],
    },
  },
  {timestamps: true}
);

const User = mongoose.model("User", userSchema);

module.exports = User;
