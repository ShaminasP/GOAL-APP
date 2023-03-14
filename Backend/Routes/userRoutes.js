const express = require("express");
const { protect } = require("../Middleware/auth");
const router = express.Router();
const {
  resgisterUser,
  userLogin,
  togetUserData,
} = require("../Controller/userController");

router.post("/", resgisterUser);
router.post("/login", userLogin);
router.get("/me", protect, togetUserData);

module.exports = router;
