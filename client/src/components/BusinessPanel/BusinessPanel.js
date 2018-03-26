import React from "react";
import "./BusinessPanel.css";
import { Grid, Row, Col } from 'react-bootstrap';
import List from "../List";
import CategoryButton from "../CategoryButton";

const businessNameArray = [
  'Home',
  'Profile',
  'Flights',
  'Hotel',
  'Dining',
  'Attractions',
  'Packing',
  'Memories'
]

const BusinessPanel = props => {
  console.log('these are my bizpanel props!!', this.props)
  return (
    <Col xs={2} className="business-panel">
      <p>BusinessPanel</p>
      {businessNameArray.map((elem, index) => <CategoryButton
        key={index}
        onClick={() => props.handleSelectCategory({ elem })}
      >{elem}</CategoryButton>)}
    </Col>
  );
}


export default BusinessPanel;


