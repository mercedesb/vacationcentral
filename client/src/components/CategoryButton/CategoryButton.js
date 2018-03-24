import React from "react";
import "./CategoryButton.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const CategoryButton = props => (
  <span className="btn btn-primary btn-lg category-btn  " {...props}>
  </span>
);

export default CategoryButton;