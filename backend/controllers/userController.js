// @desc Register User
// @route POST /api/users
// @acccess Public
const registerUser = (req, res) => {
  res.json({ message: "Register user" });
};

// @desc Authenticate a User
// @route POST /api/users/login
// @acccess Public
const loginUser = (req, res) => {
  res.json({ message: "Login user" });
};

// @desc Get User data
// @route GET /api/users/me
// @acccess Public
const getMe = (req, res) => {
  res.json({ message: "User data" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
