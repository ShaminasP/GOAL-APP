const express = require("express");
const router = express.Router();
const { protect } = require("../Middleware/auth");

const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../Controller/goalController");

router.route("/").get(protect, getGoals).post(protect, setGoals);

router.route("/:id").delete(protect,deleteGoals).put(protect,updateGoals);

module.exports = router;
