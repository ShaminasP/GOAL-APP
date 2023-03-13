const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add text value"],
    },
  },
  { timestamps: true }
);

const goalModel = mongoose.model("Goal", goalSchema);

module.exports = goalModel;
