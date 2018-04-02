import React from "react";
import "./CategoryButton.css";
import "../../VacationContainer.css"
import { Link } from "react-router-dom";

const CategoryButton = props => (
  <span>
    <Link className="btn btn-primary btn-lg category-btn" to={props.link}>{props.name}</Link>
  </span>
);

export default CategoryButton;