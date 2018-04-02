import React from "react";
import "./HeaderPanel.css";
import { Row } from 'react-bootstrap';

const HeaderPanel = props => (
  <Row xs={12} className="header-panel">
    <p className="hp-text"> Vacation Central</p>
  </Row>
);

export default HeaderPanel;