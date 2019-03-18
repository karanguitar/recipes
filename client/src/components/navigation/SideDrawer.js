import React from "react";
import { NavLink } from "react-router-dom";

const SideDrawer = props => {
  return (
    <nav className="side-drawer">
      <ul className="side-drawer__menu">
        <li className="side-drawer__item">
          <NavLink onClick={props.click} activeClassName="active" exact to="/">
            Home
          </NavLink>
        </li>
        <li className="side-drawer__item">
          <NavLink
            onClick={props.click}
            activeClassName="active"
            exact
            to="/recipes"
          >
            Recipes
          </NavLink>
        </li>
        <li className="side-drawer__item">
          <NavLink
            onClick={props.click}
            activeClassName="active"
            exact
            to="/create"
          >
            Create
          </NavLink>
        </li>
        <li className="side-drawer__item">
          <NavLink
            onClick={props.click}
            activeClassName="active"
            exact
            to="/login"
          >
            Log In{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
