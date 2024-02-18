const express = require("express");
const initialiseDatabase = require("./db/db.connection");
const exerciseRouter = require("./routes/exercise.route");
const cors = require("cors"); // Fixed typo
const foodRouter = require("./routes/food.route");
const goalRouter = require("./routes/goal.route");

const app = express();

app.use(express.json());
app.use(cors());

initialiseDatabase();

app.get("/", (req, res) => {
  res.send("Fitness Tracker API");
});

app.use("/exercises", exerciseRouter);
app.use("/foods", foodRouter);
app.use("/goals", goalRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
