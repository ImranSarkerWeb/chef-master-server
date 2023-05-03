const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
const chefs = require("./data/chef-data.json");
const chefsRecipes = require("./data/chef-with-recipe.json");
const category = require("./data/category.json");
const questions = require("./data/blog-questions.json");

app.get("/", (req, res) => {
  res.send("Node is running");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;

  const recipe = chefsRecipes.find((chefRecipe) => chefRecipe.id == id);
  res.send(recipe);
});

app.get("/catergory", (req, res) => {
  res.send(category);
});
app.get("/questions", (req, res) => {
  res.send(questions);
});
app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});
