import React from "react";
import "./DisplayPanel.css";
import { Col } from 'react-bootstrap';


// 'Home'
// 'Profile', 
// 'Flights', 
// 'Hotel', 
// 'Dining', 
// 'Attractions', 
// 'Packing', 
// 'Memories'

const DisplayPanel = props => (
  <Col xs={12} md={8} className="display-panel">
    <div>
      {props.children}
    </div>
  </Col>
);

export default DisplayPanel;