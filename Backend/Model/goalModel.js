const mongoose = require("mongoose");

const goalSchema = mongoose.Schema({
  text: {
    type: String,
    required: [true, "Please add text value"],
  },

});

const goalModel = mongoose.model("Goal", goalSchema);

module.exports = goalModel;
