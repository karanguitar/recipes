import React, { Component } from "react";
import axios from "axios";
import history from "../history";

class CreateRecipe extends Component {
  state = {
    name: "",
    description: "",
    ingredients: "",
    recipe: "",
    chef: "",
    nameError: "",
    descriptionError: "",
    ingredientsError: "",
    recipeError: "",
    chefError: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    const { name, ingredients, recipe, chef, description } = this.state;

    let nameError = "";
    let ingredientsError = "";
    let recipeError = "";
    let chefError = "";
    let descriptionError = "";

    if (!name) {
      nameError = "Can not be empty.";
    }

    if (!description) {
      descriptionError = "Can not be empty.";
    }

    if (!ingredients) {
      ingredientsError = "Can not be empty.";
    }
    if (!recipe) {
      recipeError = "Can not be empty.";
    }
    if (!chef) {
      chefError = "Can not be empty.";
    }

    if (
      nameError ||
      ingredientsError ||
      recipeError ||
      chefError ||
      descriptionError
    ) {
      this.setState({
        nameError,
        ingredientsError,
        recipeError,
        chefError,
        descriptionError
      });
      return false;
    }

    return true;
  };

  handleSubmit = async event => {
    event.preventDefault();

    const isValid = this.validate();

    if (isValid) {
      let { name, description, ingredients, recipe, chef } = this.state;
      if (ingredients.includes(",")) {
        ingredients = ingredients.split(",");
      }
      if (recipe.includes(",")) {
        recipe = recipe.split("\n");
        recipe = recipe.filter(function(e) {
          return e;
        });
      }
      const newRecipe = await axios.post("/api/recipes/create", {
        name,
        description,
        ingredients,
        recipe,
        chef
      });
      if (newRecipe.data.success) {
        history.push("/recipes");
      }
    }
  };

  render() {
    const {
      name,
      ingredients,
      description,
      recipe,
      chef,
      nameError,
      descriptionError,
      ingredientsError,
      recipeError,
      chefError
    } = this.state;
    return (
      <div className="create">
        <form method="POST" className="create__form">
          <label className="create__label" htmlFor="name">
            Recipe Name:
            <input
              value={name}
              onChange={this.handleChange}
              placeholder="Vegetarian Pizza"
              className="create__input"
              name="name"
              id="name"
              type="text"
            />
            <div className="create__error">{nameError}</div>
          </label>
          <label className="create__label" htmlFor="name">
            Description:
            <input
              value={description}
              onChange={this.handleChange}
              placeholder="A authentic pizza recipe"
              className="create__input"
              name="description"
              id="description"
              type="text"
            />
            <div className="create__error">{descriptionError}</div>
          </label>
          <label className="create__label" htmlFor="ingredients">
            Ingredients:
            <textarea
              value={ingredients}
              onChange={this.handleChange}
              placeholder="Please split each ingredient with a comma i.e olives, cheese, flour"
              name="ingredients"
              id="ingredients"
              cols="30"
              rows="10"
              className="create__textarea"
            />
            <div className="create__error">{ingredientsError}</div>
          </label>
          <label className="create__label" htmlFor="recipe">
            Recipe:
            <textarea
              value={recipe}
              onChange={this.handleChange}
              name="recipe"
              placeholder={`Please put a line space between each new step i.e. 
              \nCook pasta for 8 minutes.
              \nCut Chicken into small pieces.`}
              id="recipe"
              cols="30"
              rows="10"
              className="create__textarea"
            />
            <div className="create__error">{recipeError}</div>
          </label>
          <label className="create__label" htmlFor="chef">
            Chef:
            <input
              value={chef}
              onChange={this.handleChange}
              placeholder="Gordon Ramsey"
              className="create__input"
              name="chef"
              id="chef"
              type="text"
            />
            <div className="create__error">{chefError}</div>
          </label>
          <button
            onClick={this.handleSubmit}
            type="submit"
            className="create__button"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateRecipe;
