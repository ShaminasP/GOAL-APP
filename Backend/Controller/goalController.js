const goalModel = require("../Model/goalModel");
const userModel = require("../Model/userModel");

const getGoals = async (req, res) => {
  const goals = await goalModel.find({ user: req.user.id });
  res.status(200).json(goals);
};

const setGoals = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field ");
  }
  const goal = await goalModel.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(goal);
};
const updateGoals = async (req, res) => {
  console.log(req.body.text);
  const ID = req.params.id;
  const updation = req.body;
  console.log(updation);
  const goal = await goalModel.findById(ID);
  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }


  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedGoal = await goalModel.findByIdAndUpdate(ID, updation, {
    new: true,
  });
  res.status(200).json(updatedGoal);
};

const deleteGoals = async (req, res) => {
  const ID = req.params.id;

  const goal = await goalModel.findById(ID);

  if (!goal) {
    res.status(404);
    throw new Error("Invalid id");
  }


  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401); 
    throw new Error("User not authorized");
  }

  await goal.deleteOne();
  res.status(200).json({ id: ID });
};

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
