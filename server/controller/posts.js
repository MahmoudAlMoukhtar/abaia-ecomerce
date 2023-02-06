const {default: mongoose} = require("mongoose");
const PostMessage = require("../models/postMessage");

const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    res.status(200).json(postMessage);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const getPostsById = async (req, res) => {
  const {id: _id} = req.params;
  try {
    const blog = await PostMessage.findById(_id);
    res.status(200).json(blog);
  } catch (err) {
    res.status(400).send({message: err.message});
  }
};

const createPost = async (req, res) => {
  const {creator, title, message, tags, selectedFile, likeCount, createdAt} =
    req.body;
  const newPost = new PostMessage({
    creator,
    title,
    message,
    tags,
    selectedFile,
    likeCount,
    createdAt,
  });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const updatePost = async (req, res) => {
  const {id: _id} = req.params;
  const updates = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).send("No post with that id");
  }
  try {
    const updatePost = await PostMessage.findByIdAndUpdate(_id, updates, {
      new: true,
    });
    res.status(200).json(updatePost);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const deletPost = async (req, res) => {
  const {id: _id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).send("No post with that id");
  }
  try {
    await PostMessage.findByIdAndRemove(_id);
    res.status(200).send("success deleted post!");
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const likePost = async (req, res) => {
  const {id: _id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).send("No post with that id");
  }
  try {
    const post = await PostMessage.findById(_id);
    const updatedLikesPost = await PostMessage.findByIdAndUpdate(
      _id,
      {likeCount: post.likeCount + 1},
      {new: true}
    );
    res.status(200).json(updatedLikesPost);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletPost,
  getPostsById,
};
