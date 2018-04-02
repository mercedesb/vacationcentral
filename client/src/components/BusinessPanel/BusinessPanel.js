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

const BusinessPanel = props => {
  return (
<<<<<<< HEAD
    <Col xs={12} md={2} className="business-panel">
=======
    <NavDropdown title="Categories" className="business-panel">
>>>>>>> 99b491cc8d18474a23ca162606779aba63b58339
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
