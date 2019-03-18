import React from "react";
import { Link } from "react-router-dom";

const page404 = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">Oops, Page Not Found</h1>
      <Link to="/" className="not-found__link">
        To home Page
      </Link>
    </div>
  );
};

export default page404;
