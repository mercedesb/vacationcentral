import React from "react";
import "./BusinessPanel.css";
import { Col, NavDropdown } from 'react-bootstrap';
import CategoryButton from "../CategoryButton";

const categoryArray = [{
  name: 'Home',
  link: "/"
}, {
  name: 'Rewards',
  link: "/profile/"
}, {
  name: 'Flights',
  link: "/flights/"
}, {
  name: 'Car Rental',
  link: "/carrental/"
},{
  name: 'Hotel',
  link: "/hotels/"
}, {
  name: 'Dining',
  link: "/dining/"
}, {
  name: 'Places',
  link: "/attractions/"
}, {
  name: 'Packing',
  link: "/packing" }
]

/**
 * Creates the category buttons that determine the page displayed
 * @param {array} categoryArray 
 */
const BusinessPanel = props => {
  return (
    <NavDropdown title="Categories" className="business-panel">
      {categoryArray.map((elem, index) => (
        <CategoryButton
          key={index}
          link={elem.link}
          name={elem.name}
        />)
      )}
    </NavDropdown>
  );
}

export default BusinessPanel;
