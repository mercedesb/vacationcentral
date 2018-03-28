import React from "react";
import "./BusinessDisplay.css";
import { Grid, Row, Col } from 'react-bootstrap';
import BusinessListItem from "./BusinessListItem"


const BusinessDisplay = props => (

  // if (!this.props.show) {return null; }

  <Col xs={12} className="business-display">
    <ul>
      {props.results.length !== 0 ? 
        props.results
          .filter(business => business.type === props.businessType)
          .map(business => <BusinessListItem 
            editing={props.editing}
            editId={props.editId}
            getAllBusinesses={props.getAllBusinesses}
            id={business.TripId}
            key={business.TripId} 
            result={business} 
            toggleEdit={props.toggleEdit} 
          />) :
          <p className="second-text">Add a business to start</p>}
    </ul>
  </Col>
);


export default BusinessDisplay;