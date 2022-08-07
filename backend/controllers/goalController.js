// This is some descriptive commenting

// @desc Get Goals
// @route GET /api/goals
// @acccess Private
const getGoals = (req, res) => {
  //   res.send("Get Goals");    simple
  res.status(200).json({ message: "Get goals" });
  //   you don't have to add the status manually, but you can
};

// @desc Set Goal
// @route POST /api/goals
// @acccess Private
const setGoal = (req, res) => {
  res.status(200).json({ message: "Set goals" });
};

// @desc Update Goal
// @route PUT /api/goals/:id
// @acccess Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// @desc Delete Goal
// @route GET /api/goals/:id
// @acccess Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
