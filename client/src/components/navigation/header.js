import React, { Component } from "react";
import logo from "../../img/logo.png";
import { NavLink, Link } from "react-router-dom";

class header extends Component {
  state = {
    color: "",
    activeClass: ""
  };

  listenScrollEvent = e => {
    if (window.scrollY > 100) {
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
          <Link to="/">
            <img className="navigation__logo-image" src={logo} alt="logo" />
          </Link>
        </div>
        {this.state.color ? (
          <h1 className="navigation__heading">Recipes</h1>
        ) : null}
        <ul className="navigation__menu">
          <li onClick={this.activeClass} className="navigation__item">
            <NavLink activeClassName="active" exact to="/recipes">
              New recipes
            </NavLink>
          </li>
          <li onClick={this.activeClass} className="navigation__item">
            <NavLink activeClassName="active" exact to="/create">
              Create
            </NavLink>
          </li>
          <li onClick={this.activeClass} className="navigation__item">
            <NavLink activeClassName="active" exact to="/login">
              Log In{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default header;
