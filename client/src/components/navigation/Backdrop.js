import React from "react";

const Backdrop = props => {
  return <div onClick={props.click} className="backdrop" />;
};

export default Backdrop;
