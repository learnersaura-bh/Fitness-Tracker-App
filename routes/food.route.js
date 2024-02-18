const express = require("express");
const {
  getAllFoods,
  createFood,
  deleteFood,
} = require("../controllers/food.controller");

const foodRouter = express.Router();

foodRouter.get("/", async (req, res) => {
  try {
    const foods = await getAllFoods();
    if (foods.length > 0) {
      res.status(200).json(foods);
    } else {
      res.status(404).json({ error: "No foods found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

foodRouter.post("/", async (req, res) => {
  try {
    const inputFood = req.body;
    const savedFood = await createFood(inputFood);
    res.status(201).json(savedFood);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

foodRouter.delete("/:foodId", async (req, res) => {
  try {
    const foodId = req.params.foodId;
    const deletedFood = await deleteFood(foodId);
    if (deletedFood) {
      res.status(200).json(deletedFood);
    } else {
      res.status(404).json({ error: "Food not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = foodRouter;
