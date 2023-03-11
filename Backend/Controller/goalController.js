const getGoals = async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "getGoals" });
};

const setGoals = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field ");
  }
  res.status(200).json({ message: "setGoals" });
};

const updateGoals = async (req, res) => {
  res.status(200).json({ message: `update goals ${req.params.id}` });
};

const deleteGoals = async (req, res) => {
  res.status(200).json({ message: `delete goals ${req.params.id}` });
};

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
