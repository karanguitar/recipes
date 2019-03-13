import React, { Component } from "react";
import RecipeListItem from "../components/RecipeListItem";
import img from "../img/cuisine-2248567_1920.jpg";
import Modal from "../components/util/Modal";

class PublicRecipes extends Component {
  state = {
    showModal: false,
    selectedRecipe: {}
  };

  //   componentWillMount() {
  //     this.props.getHeightForModal(window.innerHeight);
  //   }

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

  items = [
    {
      title: "Curry",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur sed commodi magni quisquam temporibus quae velit possimus incidunt fugiat illum obcaecati quo, harum cumque ipsa corporis minima quam ad.",
      img: img
    },
    {
      title: "Bread",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur sed commodi magni quisquam temporibus quae velit possimus incidunt fugiat illum obcaecati quo, harum cumque ipsa corporis minima quam ad.",
      img: img
    },
    {
      title: "Soy main",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur sed commodi magni quisquam temporibus quae velit possimus incidunt fugiat illum obcaecati quo, harum cumque ipsa corporis minima quam ad.",
      img: img
    },
    {
      title: "chicken",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur sed commodi magni quisquam temporibus quae velit possimus incidunt fugiat illum obcaecati quo, harum cumque ipsa corporis minima quam ad.",
      img: img
    }
  ];

  render() {
    const { showModal, selectedRecipe } = this.state;

    const renderListItem = this.items.map((item, index) => {
      const { title, img, content } = item;
      return (
        <div key={index} onClick={() => this.selectRecipe(item)}>
          <RecipeListItem image={img} title={title} content={content} />
        </div>
      );
    });

    return (
      <div className="recipes">
        <ul className="recipes__list">{renderListItem}</ul>
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
