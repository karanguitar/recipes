import React, { Component } from "react";
import ReactDOM from "react-dom";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.element = document.createElement("div");
    this.modalRoot = document.getElementById("modal-root");
    this.modalRoot.appendChild(this.element);
  }

  componentDidMount() {
    document.addEventListener("keyup", this.keyUp, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keyup", this.keyUp, false);
    this.modalRoot.removeChild(this.element);
  }

  keyUp = e => {
    if (e.key === "Escape") {
      this.props.onClose();
    }
  };

  clickedBackground = () => {
    this.props.onClose();
  };

  render() {
    return ReactDOM.createPortal(this._renderModal(), this.element);
  }

  _renderModal() {
    const {
      img,
      name,
      description,
      recipe,
      ingredients
    } = this.props.toDisplay;

    const renderIngredientsList = () => {
      if (ingredients.length > 0) {
        return ingredients.map(ingredient => {
          return <li className="modal__ingredients-item">{ingredient} </li>;
        });
      }
    };

    const renderRecipeList = () => {
      if (recipe.length > 0) {
        return recipe.map((step, index) => {
          return <li className="modal__ingredients-item">{step}</li>;
        });
      }
    };

    return (
      <div onClick={this.clickedBackground} className="modal__background">
        <div onClick={e => e.stopPropagation()} className="modal__container">
          <h1 className="modal__heading">{name}</h1>
          <img className="modal__image" src={img} alt={name} />
          <i className="modal__description">{description}</i>
          <ul className="modal__ingredients-list">{renderIngredientsList()}</ul>
          <ol className="modal__recipe">{renderRecipeList()}</ol>
        </div>
      </div>
    );
  }
}

export default Modal;
