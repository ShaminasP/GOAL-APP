const userModel = require("../Model/userModel");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const resgisterUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(404);
    throw new Error("Data required");
  }
  const user = await userModel.findOne({ email });
  if (user) {
    res.status(400);
    throw new Error("User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const User = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });
  if (User) {
    res.status(201).json({
      _id: User._id,
      name: User.name,
      email: User.email,
      token: generateToken(User._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  await bcrypt.compare(password, user.password);
  res.status(200).json({
    _id: user.id,
    name: user.name,
    email: user.email,
    token: generateToken(user.id),
  });
};

const togetUserData = async (req, res) => {
  res.json(200).json(req.user);
};

// Generate jwt token
const generateToken = (id) => {
  return JWT.sign({ id }, process.env.JwT_SECRET, { expiresIn: "30d" });
};

module.exports = { userLogin, resgisterUser, togetUserData };
