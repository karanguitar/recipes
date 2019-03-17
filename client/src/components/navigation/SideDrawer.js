import React from "react";
import { NavLink } from "react-router-dom";

const SideDrawer = () => {
  return (
    <nav className="side-drawer">
      <ul className="side-drawer__menu">
        <li className="side-drawer__item">
          <NavLink activeClassName="active" exact to="/recipes">
            New recipes
          </NavLink>
        </li>
        <li className="side-drawer__item">
          <NavLink activeClassName="active" exact to="/create">
            Create
          </NavLink>
        </li>
        <li className="side-drawer__item">
          <NavLink activeClassName="active" exact to="/login">
            Log In{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
