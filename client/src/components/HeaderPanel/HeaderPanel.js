import React from "react";
import "./HeaderPanel.css";
import { Row, Col } from 'react-bootstrap';

const HeaderPanel = props => (
  <Row xs={12} md={2} className="header-panel">
    <Col xs={6}>
      <p className="hp-text"> Vacation Central</p>
    </Col>
    <Col xs={2}>
      {props.children}
    </Col>
  </Row>
);

export default HeaderPanel;