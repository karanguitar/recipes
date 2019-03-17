import React, { Component } from "react";
import RecipeListItem from "../components/RecipeListItem";
import img from "../img/cuisine-2248567_1920.jpg";
import Modal from "../components/util/Modal";
import axios from "axios";

class PublicRecipes extends Component {
  items = [
    {
      name: "Curry",
      recipe:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur sed commodi magni quisquam temporibus quae velit possimus incidunt fugiat illum obcaecati quo, harum cumque ipsa corporis minima quam ad.",
      img: img
    },
    {
      name: "Bread",
      recipe:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur sed commodi magni quisquam temporibus quae velit possimus incidunt fugiat illum obcaecati quo, harum cumque ipsa corporis minima quam ad.",
      img: img
    },
    {
      name: "Soy main",
      recipe:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur sed commodi magni quisquam temporibus quae velit possimus incidunt fugiat illum obcaecati quo, harum cumque ipsa corporis minima quam ad.",
      img: img
    },
    {
      name: "chicken",
      recipe:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur sed commodi magni quisquam temporibus quae velit possimus incidunt fugiat illum obcaecati quo, harum cumque ipsa corporis minima quam ad.",
      img: img
    }
  ];

  state = {
    showModal: false,
    selectedRecipe: {},
    recipes: this.items
  };

  componentWillMount() {
    axios.get("/api/recipes").then(data => {
      if (data.data.length === 0) {
        return;
      } else {
        const newList = data.data.map(recipe => {
          return { ...recipe, img: img };
        });
        this.setState(
          prevData => ({
            recipes: [...newList, ...prevData.recipes]
          }),
          () => console.log(this.state.recipes)
        );
        console.log(data.data);
      }
    });
  }

  selectRecipe = recipe => {
    this.setState(
      prevState => ({
        selectedRecipe: recipe
      }),
      () => this.showModal()
    );
  };

  showModal = () => {
    this.setState(() => ({
      showModal: true
    }));
  };

  render() {
    const { showModal, selectedRecipe } = this.state;

    const renderListItem = this.state.recipes.map((item, index) => {
      const { name, img, recipe } = item;
      return (
        <div key={index} onClick={() => this.selectRecipe(item)}>
          <RecipeListItem image={img} title={name} content={recipe} />
        </div>
      );
    });

    return (
      <div className="recipes">
        <ul className="recipes__list">
          {this.state.recipes.length > 0 ? renderListItem : ""}
        </ul>
        {showModal ? (
          <Modal
            onClose={() => this.setState({ showModal: false })}
            toDisplay={selectedRecipe}
          />
        ) : null}
      </div>
    );
  }
}

export default PublicRecipes;
