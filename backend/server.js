const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.get("/api/goals", (req, res) => {
  //   res.send("Get Goals");    simple
  res.status(200).json({ message: "Get goals" });
  //   you don't have to add the status manually, but you can
});

app.listen(port, () => console.log(`Server started on port: ${port}`));
