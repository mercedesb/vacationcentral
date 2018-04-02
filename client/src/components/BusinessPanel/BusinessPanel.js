import React from "react";
import "./BusinessPanel.css";
import { Col } from 'react-bootstrap';
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
  console.log('these are my bizpanel props!!', this.props)
  return (
    <Col xs={2} className="business-panel">
      {categoryArray.map((elem, index) => (
        <CategoryButton
          key={index}
          link={elem.link}
          name={elem.name}
        />)
      )}
    </Col>
  );
}

export default BusinessPanel;
