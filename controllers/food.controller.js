const Food = require("../models/food.model");

async function getAllFoods() {
  try {
    const Foods = await Food.find();
    console.log("Foods retrieved successfully", Foods);
    return Foods;
  } catch (error) {
    console.error("Error while fetching foods:", error.message);
    throw new Error("Error while fetching foods: " + error.message);
  }
}

async function createFood(inputFood) {
  try {
    const newFood = new Food(inputFood);
    const savedFood = await newFood.save();
    console.log("Food created successfully:", savedFood);
    return savedFood;
  } catch (error) {
    console.error("Error while creating food:", error.message);
    throw new Error("Error while creating food: " + error.message);
  }
}

async function deleteFood(foodId) {
  try {
    const food = await Food.findByIdAndDelete(foodId);
    if (food) {
      console.log("Food deleted successfully:", food);
      return food;
    } else {
      console.error("Food not found for deletion");
    }
  } catch (error) {
    console.error("Error while deleting food:", error.message);
    throw new Error("Error while deleting food: " + error.message);
  }
}

module.exports = {
  getAllFoods,
  createFood,
  deleteFood,
};
