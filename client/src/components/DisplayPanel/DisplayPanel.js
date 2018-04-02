import React from "react";
import "./DisplayPanel.css";
import { Col } from 'react-bootstrap';

const DisplayPanel = props => (
<<<<<<< HEAD
  <Col xs={12} md={8} className="display-panel">
=======
  <Col xs={12} md={10} className="display-panel">
>>>>>>> 99b491cc8d18474a23ca162606779aba63b58339
    <div>
      {props.children}
    </div>
  </Col>
);

export default DisplayPanel;