const express = require("express");
const router = express.Router();
const {
  resgisterUser,
  userLogin,
  togetUserData,
} = require("../Controller/userController");

router.post("/", resgisterUser);
router.post("/login", userLogin);
router.get("/me", togetUserData);

module.exports = router;
