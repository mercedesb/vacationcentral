import React from "react";
import "./HeaderPanel.css";
import { Row, Col } from 'react-bootstrap';

/**
 * Header is comprised of the title and the Business panel
 * @param props - the BusinessPanel (which consists of the category buttons)
 */
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