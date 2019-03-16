import React, { Component } from "react";
import axios from "axios";
import history from "../history";

class CreateRecipe extends Component {
  state = {
    name: "",
    ingredients: "",
    recipe: "",
    chef: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { name, ingredients, recipe, chef } = this.state;
    const newRecipe = await axios.post("/api/recipes/create", {
      name,
      ingredients,
      recipe,
      chef
    });
    if (newRecipe.data.success) {
      history.push("/recipes");
    }
  };

  render() {
    const { name, ingredients, recipe, chef } = this.state;
    return (
      <div className="create">
        <form method="POST" className="create__form">
          <label className="create__label" htmlFor="name">
            Recipe Name:
            <input
              value={name}
              onChange={this.handleChange}
              placeholder="Carbonara"
              className="create__input"
              name="name"
              id="name"
              type="text"
            />
          </label>
          <label className="create__label" htmlFor="ingredients">
            Ingredients:
            <textarea
              value={ingredients}
              onChange={this.handleChange}
              placeholder="Spaghetti, parmesan Cheese"
              name="ingredients"
              id="ingredients"
              cols="30"
              rows="10"
              className="create__textarea"
            />
          </label>
          <label className="create__label" htmlFor="recipe">
            Recipe:
            <textarea
              value={recipe}
              onChange={this.handleChange}
              name="recipe"
              id="recipe"
              cols="30"
              rows="10"
              className="create__textarea"
            />
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
