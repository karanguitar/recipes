import React from "react";

const DrawerToggleButton = props => {
  return (
    <button onClick={props.click} className="toggle-button">
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
    </button>
  );
};

export default DrawerToggleButton;
