const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipeSchema = new Schema({
  name: String,
  ingredients: String,
  recipe: String,
  chef: String,
  category: String,
  countryOfOrigin: String
});

mongoose.model("recipes", recipeSchema);
