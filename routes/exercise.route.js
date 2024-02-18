const express = require("express");
const {
  getAllExercises,
  createExercise,
  deleteExercise,
} = require("../controllers/exercise.controller");

const exerciseRouter = express.Router();

exerciseRouter.get("/", async (req, res) => {
  try {
    const exercises = await getAllExercises();
    if (exercises.length > 0) {
      res.status(200).json({ exercises, message: "Exercises fetched successfully" });
    } else {
      res.status(404).json({ error: "No exercises found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch exercises: " + error.message });
  }
});

exerciseRouter.post("/", async (req, res) => {
  try {
    const exercise = await createExercise(req.body);
    res.status(201).json({ exercise, message: "Exercise created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create exercise: " + error.message });
  }
});

exerciseRouter.delete("/:id", async (req, res) => {
  try {
    const exercise = await deleteExercise(req.params.id);
    res.status(200).json({ exercise, message: "Exercise deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete exercise: " + error.message });
  }
});

module.exports = exerciseRouter;
