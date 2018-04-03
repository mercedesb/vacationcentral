import React from "react";
import "./DisplayPanel.css";
import { Col } from 'react-bootstrap';

/**
 * Central panel of Vacation Central
 * @param props - the various pages that comprise the app - profile, flights, hotels, dining, places, packing
 */
const DisplayPanel = props => (
  <Col xs={12} md={9} className="display-panel">
    <div>
      {props.children}
    </div>
  </Col>
);

export default DisplayPanel;