const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

// adding middleware, so I can read the body of a request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// because of this line, we don't need full path in goalRoutes.js
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// overriding the error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port: ${port}`));
