import React from "react";
import "./CategoryButton.css";
import { Link } from "react-router-dom";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const CategoryButton = props => (
  <span className="btn btn-primary btn-lg category-btn">
    <Link to={props.link}>{props.name}</Link>
  </span>
);

export default CategoryButton;