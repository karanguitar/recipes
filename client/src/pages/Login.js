import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__heading">Under construction.</h1>
        <p className="login__information">
          Soon you'll be able to login to and edit your created recipes. You'll
          also be able to search a large database of recipes! Check our
          available recipes by clicking the button below!
        </p>
        <Link className="login__link" to="/recipes">
          Recipes
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
