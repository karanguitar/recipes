import React from "react";
import logo from "../../img/logo.png";

const header = () => {
  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <img className="navigation__logo-image" src={logo} alt="logo" />
      </div>
      <ul className="navigation__menu">
        <li className="navigation__item">New recipes</li>
        <li className="navigation__item">My recipes</li>
        <li className="navigation__item">Logout</li>
      </ul>
    </nav>
  );
};

export default header;
