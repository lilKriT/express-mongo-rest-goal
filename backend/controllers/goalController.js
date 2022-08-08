// need to download express-async-handler for this
const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");
const User = require("../models/userModel");

// This is some descriptive commenting

// @desc Get Goals
// @route GET /api/goals
// @acccess Private
const getGoals = asyncHandler(async (req, res) => {
  //   res.send("Get Goals");    simple
  const goals = await Goal.find({ user: req.user.id });

  res.status(200).json(goals);
  //   you don't have to add the status manually, but you can
});

// @desc Set Goal
// @route POST /api/goals
// @acccess Private
const setGoal = asyncHandler(async (req, res) => {
  //   console.log(req.body); // this will not work without the middleware
  if (!req.body.text) {
    // res.status(400).json({ message: "Please add a text field" }); // this is the basic way
    res.status(400);
    throw new Error("Please add a text field"); // this will also cause issues, you need more middleware
  }

  // else
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(goal);
});

// @desc Update Goal
// @route PUT /api/goals/:id
// @acccess Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found.");
  }

  const user = await User.findById(req.user.id);

  // Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Only creator of a goal can update it
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }); // new: true means - create if it doesn't exist

  res.status(200).json(updatedGoal);
});

// @desc Delete Goal
// @route GET /api/goals/:id
// @acccess Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found.");
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
