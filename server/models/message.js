const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    idUser: {type: String},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    message: {type: String, required: true},
  },
  {timestamps: true}
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
