import React from "react";
import "./DisplayPanel.css";
import { Col } from 'react-bootstrap';

const DisplayPanel = props => (
  <Col xs={12} md={9} className="display-panel">
    <div>
      {props.children}
    </div>
  </Col>
);

export default DisplayPanel;