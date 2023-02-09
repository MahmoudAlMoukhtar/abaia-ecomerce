const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const fetchAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const fetchUserById = async (req, res) => {
  const {id: _id} = req.params;
  try {
    const user = await User.findById(_id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const fetchFavoraitProducts = async (req, res) => {
  const {id: _id} = req.params;
  try {
    const user = await User.findById(_id);
    res.status(200).json(user.favoraitProducts);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const updateFavoraitProductsById = async (req, res) => {
  const {id: _id} = req.params;
  const newUser = req.body;
  console.log(newUser);
  console.log(_id);
  try {
    // let user = await User.findById(_id);
    // console.log(user);
    // user.favoraitProducts.push(newFavoraitProduct);
    // //console.log(req.userId);
    // //console.log(_id);
    const updatedFavoraitProducts = await User.findByIdAndUpdate(_id, newUser, {
      new: true,
    });
    //console.log(updateFavoraitProductsById);
    res.status(200).json(updatedFavoraitProducts);
  } catch (err) {
    res.status(400).send({message: err.message});
  }
};

const deleteUserById = async (req, res) => {
  const {id: _id} = req.params;
  console.log(_id);
  try {
    const userDeleted = await User.findByIdAndDelete(_id);

    res.status(200).json(userDeleted);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};
const updateUserById = async (req, res) => {
  const {id: _id} = req.params;
  const updates = req.body;
  //console.log(_id);

  try {
    const userUpdated = await User.findByIdAndUpdate(_id, updates, {
      new: true,
    });

    const token = jwt.sign(
      {
        firstName: userUpdated.firstName,
        lastName: userUpdated.lastName,
        email: userUpdated.email,
        mobileNumber: userUpdated.mobileNumber,
        favoraitProducts: userUpdated.favoraitProducts,
        id: userUpdated._id,
      },
      "132jwtsecretkey123"
    );
    res.status(200).json({token});
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const signin = async (req, res) => {
  const {email, password} = req.body;
  console.log(req.body);
  try {
    const existingUser = await User.findOne({email});
    if (!existingUser)
      return res.status(400).json({message: "sorry this user doesnt exist!"});
    const isPasswordCorrect = await bcrypt.compareSync(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res
        .status(400)
        .json({message: "sorry password or email is error"});

    const token = jwt.sign(
      {
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        email: existingUser.email,
        mobileNumber: existingUser.mobileNumber,
        favoraitProducts: existingUser.favoraitProducts,
        id: existingUser._id,
      },
      "132jwtsecretkey123"
    );
    res.status(200).json({token});
  } catch (err) {
    res.status(500).json({message: "Somthing error in signin"});
  }
};

const signup = async (req, res) => {
  const {firstName, lastName, mobileNumber, email, password, confirmPassword} =
    req.body;
  //console.log(req.body);
  try {
    const existingUser = await User.findOne({email});
    //console.log(existingUser);
    if (existingUser)
      return res.status(404).json({message: "sorry this user already exist!"});
    if (password !== confirmPassword)
      return res.status(404).json({message: "Passwords not match"});

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const resulte = await new User({
      firstName,
      lastName,
      email,
      mobileNumber,
      password: hash,
    });
    await resulte.save();
    const token = jwt.sign(
      {
        firstName: resulte.firstName,
        lastName: resulte.lastName,
        email: resulte.email,
        mobileNumber: resulte.mobileNumber,
        favoraitProducts: resulte.favoraitProducts,
        id: resulte._id,
      },
      "132jwtsecretkey123"
    );
    res.status(200).json({token});
  } catch (err) {
    res.status(500).json({message: "Somthing error in signin"});
  }
};

module.exports = {
  signin,
  signup,
  fetchAllUsers,
  deleteUserById,
  fetchUserById,
  updateUserById,
  fetchFavoraitProducts,
  updateFavoraitProductsById,
};
