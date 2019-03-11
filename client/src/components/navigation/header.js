import React, { Component } from "react";
import logo from "../../img/logo.png";

class header extends Component {
  state = {
    color: ""
  };

  listenScrollEvent = e => {
    if (window.scrollY > 400) {
      this.setState({ color: "--white" });
    } else {
      this.setState({ color: "" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <nav className={`navigation  navigation${this.state.color}`}>
        <div className="navigation__logo">
          <img className="navigation__logo-image" src={logo} alt="logo" />
        </div>
        {this.state.color ? (
          <h1 className="navigation__heading">Recipes</h1>
        ) : null}
        <ul className="navigation__menu">
          <li className="navigation__item">New recipes</li>
          <li className="navigation__item">My recipes</li>
          <li className="navigation__item">Logout</li>
        </ul>
      </nav>
    );
  }
}

export default header;
