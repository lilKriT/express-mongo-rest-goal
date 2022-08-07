const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // the cyan and underline are just for a style in the console
    console.log(`MongoDB connect: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1); // exit process with a failure
  }
};

module.exports = connectDB;
