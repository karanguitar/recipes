import React, { Component } from "react";
import RecipeListItem from "../components/RecipeListItem";
import img from "../img/cuisine-2248567_1920.jpg";

class PublicRecipes extends Component {
  items = {
    title: "Curry",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur sed commodi magni quisquam temporibus quae velit possimus incidunt fugiat illum obcaecati quo, harum cumque ipsa corporis minima quam ad.",
    img: img
  };

  render() {
    return (
      <div className="recipes">
        <ul className="recipes__list">
          <RecipeListItem
            image={this.items.img}
            title={this.items.title}
            content={this.items.content}
          />
          <RecipeListItem
            image={this.items.img}
            title={this.items.title}
            content={this.items.content}
          />
          <RecipeListItem
            image={this.items.img}
            title={this.items.title}
            content={this.items.content}
          />
          <RecipeListItem
            image={this.items.img}
            title={this.items.title}
            content={this.items.content}
          />
        </ul>
      </div>
    );
  }
}

export default PublicRecipes;
