import React from "react";
import "./BusinessDisplay.css";
import { Grid, Row, Col } from 'react-bootstrap';
import BusinessListItem from "./BusinessListItem"

const BusinessDisplay = props => (
  <Col xs={12} className="business-display">
    <ul>
      {props.results.length !== 0 ? 
        props.results
          .filter(business => business.type === props.businessType)
          .map(business => <BusinessListItem key={business.id} name={business.name} />) :
        <h3>Add a business to start</h3>}
    </ul>
  </Col>
);


export default BusinessDisplay;