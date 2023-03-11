const goalModel = require("../Model/goalModel");

const getGoals = async (req, res) => {
  const goals = await goalModel.find();
  res.status(200).json({ message: "getGoals" });
};

const setGoals = async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    // .json({ message: "please add a text field"})
    throw new Error("please add a text field ");
  }
  const goal = await goalModel.create({ text:req.body.text });
  res.status(200).json({ message: "setGoals" });
};

const updateGoals = async (req, res) => {
  res.status(200).json({ message: `update goals ${req.params.id}` });
};

const deleteGoals = async (req, res) => {
  res.status(200).json({ message: `delete goals ${req.params.id}` });
};

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
