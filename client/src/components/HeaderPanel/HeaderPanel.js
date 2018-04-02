import React from "react";
import "./HeaderPanel.css";
import { Row, Col } from 'react-bootstrap';

const HeaderPanel = props => (
  <Row className="header-panel">
    <Col xs={12} md={9}>
      <p className="hp-text"> Vacation Central</p>
    </Col>
    <Col className="categories-nav" xs={12} md={3}>
      {props.children}
    </Col>
  </Row>
);

export default HeaderPanel;