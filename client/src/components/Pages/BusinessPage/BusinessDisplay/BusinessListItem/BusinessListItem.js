import React from "react";
import "./BusinessListItem.css";
// import { Grid, Row, Col } from 'react-bootstrap';

const BusinessListItem = props => (
  <li className="business-list-item">
    <h3>{props.name}</h3>
  </li>
);

export default BusinessListItem;