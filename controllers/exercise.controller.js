const Exercise = require("../models/exercise.model");

async function getAllExercises(req, res) {
  try {
    const exercises = await Exercise.find();
    console.log("Exercises retrieved successfully", exercises);
    return exercises;
  } catch (err) {
    throw new Error("Error while fetching exercises: " + err.message);
  }
}

async function createExercise({ name, duration, caloriesBurned }) {
  try {
    const exercise = new Exercise({ name, duration, caloriesBurned });
    const savedExercise = await exercise.save();
    console.log("Exercise created successfully:", savedExercise);
    return savedExercise;
  } catch (err) {
    throw new Error("Error while creating exercise: " + err.message);
  }
}

async function deleteExercise(id) {
  try {
    const exercise = await Exercise.findByIdAndDelete(id);
    if (exercise) {
      console.log("Exercise deleted successfully:", exercise);
      return exercise;
    } else {
      throw new Error("Exercise not found");
    }
  } catch (err) {
    throw new Error("Error while deleting exercise: " + err.message);
  }
}

module.exports = { getAllExercises, createExercise, deleteExercise };
