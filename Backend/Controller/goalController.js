const goalModel = require("../Model/goalModel");

const getGoals = async (req, res) => {
  const goals = await goalModel.find();
  res.status(200).json(goals);
};

const setGoals = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    // .json({ message: "please add a text field"})
    throw new Error("please add a text field ");
  }
  const goal = await goalModel.create({ text: req.body.text });
  res.status(200).json(goal);
};

const updateGoals = async (req, res) => {
  const ID = req.params.id;
  const updation = req.body;
  const goal = await goalModel.findById(ID);
  if (!goal) {
    res.status(404);
    throw new Error("Invalid id");
  }
  const updatedGoal = await goalModel.findByIdAndUpdate({ ID, updation });
  res.status(200).json(updatedGoal);
};

const deleteGoals = async (req, res) => {
  const ID = req.params.id;

  const goal = await goalModel.findById(ID);
  if (!goal) {
    res.status(404);
    throw new Error("Invalid id");
  }
  goal.remove();
  res.status(200).json({ id: ID });
};

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
