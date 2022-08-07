const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

// router.get("/", getGoals);
// router.post("/", setGoal);
router.get("/", getGoals).post("/", setGoal); // this saves a line!
// it only works because they have the same route

// router.put("/:id", updateGoal);
// router.delete("/:id", deleteGoal);
router.put("/:id", updateGoal).delete("/:id", deleteGoal); //same here

module.exports = router;
