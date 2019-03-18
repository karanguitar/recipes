const mongoose = require("mongoose");
const Recipe = mongoose.model("recipes");

exports.getRecipes = async (req, res) => {
  const recipes = await Recipe.find();
  if (recipes) {
    return res.send(recipes);
  } else {
    return res.json({ data: false });
  }
};

exports.createRecipe = async (req, res) => {
  const { name, ingredients, recipe, chef, description } = req.body;
  const newRecipe = await new Recipe({
    name,
    description,
    ingredients,
    recipe,
    chef
  }).save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
};
