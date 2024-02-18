const Goal = require("../models/goal.model");

async function getAllGoals() {
  try {
    const goals = await Goal.find();
    if (goals.length > 0) {
      console.log("Goals retrieved successfully:", goals);
      return goals;
    } else {
      console.log("Error fetching goals")
    }
  } catch (error) {
    console.error("Error fetching goals:", error.message);
    throw new Error("Error fetching goals");
  }
}

async function createGoal(inputGoal) {
  try {
    const newGoal = new Goal(inputGoal);
    const savedGoal = await newGoal.save();
    console.log('New goal added successfully:', savedGoal);
    return savedGoal;
  } catch (error) {
    console.error('Error creating goal:', error.message);
    throw new Error("Error creating goal");
  }
}

async function deleteGoal(goalId) {
  try {
    const selectedGoal = await Goal.findByIdAndDelete(goalId);
    if (selectedGoal) {
      console.log('Deleted goal:', selectedGoal);
      return selectedGoal;
    } else {
      console.log('Goal not found!');
    }
  } catch (error) {
    console.error('Error deleting goal:', error.message);
    throw new Error("Error deleting goal");
  }
}

module.exports = {
  getAllGoals,
  createGoal,
  deleteGoal
};
