import React from "react";

const RecipeListItem = ({ image, title, content }) => {
  return (
    <li className="recipes__list-item">
      <img src={image} alt="food on the table" className="recipes__image" />
      <h3 className="recipes__heading">{title}</h3>
      <p className="recipes__preview">{content}</p>
    </li>
  );
};

export default RecipeListItem;
