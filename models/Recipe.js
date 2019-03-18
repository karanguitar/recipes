const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipeSchema = new Schema({
  name: String,
  description: String,
  ingredients: Array,
  recipe: Array,
  chef: String,
  category: String,
  countryOfOrigin: String
});

mongoose.model("recipes", recipeSchema);
