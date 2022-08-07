const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

// because of this line, we don't need full path in goalRoutes.js
app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => console.log(`Server started on port: ${port}`));
