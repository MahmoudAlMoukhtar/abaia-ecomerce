const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  by: {
    type: String,
  },
  comments: {
    type: [String],
  },
  selectedFile: {
    type: String,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

module.exports = PostMessage;
