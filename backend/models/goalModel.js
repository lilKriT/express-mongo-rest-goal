const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    // text: String    // simple way
    text: {
      type: String,
      // required: true, // simple way
      required: [true, "Please add a text valuse"],
    },
  },
  { timestamps: true } // this adds fields for createdAt and updatedAt
);

module.exports = mongoose.model("Goal", goalSchema);
