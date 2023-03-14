const JWT = require("jsonwebtoken");
const User = require("../Model/userModel");

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decodedToken = JWT.verify(token, process.env.JwT_SECRET);
      console.log(decodedToken);

      //   Get user form token
      req.user = await User.findById(decodedToken.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized , no token");
  }
};

module.exports = { protect };
