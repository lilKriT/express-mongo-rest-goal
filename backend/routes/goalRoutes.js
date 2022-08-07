const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //   res.send("Get Goals");    simple
  res.status(200).json({ message: "Get goals" });
  //   you don't have to add the status manually, but you can
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Set goals" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = router;
