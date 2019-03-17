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
    return (
      <div onClick={this.clickedBackground} className="modal__background">
        <div onClick={e => e.stopPropagation()} className="modal__container">
          <h1 className="modal__heading">{this.props.toDisplay.name}</h1>
          <img
            className="modal__image"
            src={this.props.toDisplay.img}
            alt={this.props.toDisplay.name}
          />
          <p className="modal__content">{this.props.toDisplay.recipe}</p>
        </div>
      </div>
    );
  }
}

export default Modal;
