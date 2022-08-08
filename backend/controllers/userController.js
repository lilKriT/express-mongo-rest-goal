const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc Register User
// @route POST /api/users
// @acccess Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all the fields");
  }

  // Check if user exists
  const userExists = User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  res.json({ message: "Register user" });
});

// @desc Authenticate a User
// @route POST /api/users/login
// @acccess Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
});

// @desc Get User data
// @route GET /api/users/me
// @acccess Public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User data" });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
