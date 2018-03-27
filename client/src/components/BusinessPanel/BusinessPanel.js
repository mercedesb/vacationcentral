import React from "react";
import "./BusinessPanel.css";
import { Grid, Row, Col } from 'react-bootstrap';
import CategoryButton from "../CategoryButton";

const categoryArray = [{
  name: 'Home',
  link: "/"
}, {
  name: 'Profile',
  link: "/profile"
}, {
  name: 'Flights',
  link: "/flights"
}, {
  name: 'Hotel',
  link: "/hotels"
}, {
  name: 'Dining',
  link: "/dining"
}, {
  name: 'Attractions',
  link: "/attractions"}
// }, {
//   name: 'Packing',
//   link: "/packing"
// }, {
//   name: 'Memories',
//   link: "/memories"
// }
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


