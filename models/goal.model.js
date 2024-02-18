const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  targetDate: {
    type: Date,
    required: true,
  },
  targetCalories: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["In Progress", "Achieved", "Abandoned"],
    required: true,
  },
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
