const express = require("express");
const {
  getAllGoals,
  createGoal,
  deleteGoal,
} = require("../controllers/goal.controller");

const goalRouter = express.Router();

goalRouter.get("/", async (req, res) => {
  try {
    const goals = await getAllGoals();
    if (goals.length > 0) {
      res.status(200).json(goals);
    } else {
      res.status(404).json({ error: "No goals found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

goalRouter.post("/", async (req, res) => {
  try {
    const newGoal = await createGoal(req.body);
    res.status(201).json(newGoal);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

goalRouter.delete("/:goalId", async (req, res) => {
  try {
    const deletedGoal = await deleteGoal(req.params.goalId);
    if (deletedGoal) {
      res.status(200).json(deletedGoal);
    } else {
      res.status(404).json({ error: "Goal not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = goalRouter;
