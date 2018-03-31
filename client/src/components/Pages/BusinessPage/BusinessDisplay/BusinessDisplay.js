import React from "react";
import "./BusinessDisplay.css";
import { Grid, Row, Col } from 'react-bootstrap';
import BusinessListItem from "./BusinessListItem"


const BusinessDisplay = props => {
  if (!props.show) { return null; }
  console.log('these are my business display props!!', props)
  const filteredBusinesses = props.results.filter(business => business.type === props.businessType);
  return (
    <Col xs={12} >
      <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>
        {filteredBusinesses.length !== 0 ?
          filteredBusinesses
            .map(business => <BusinessListItem
              editing={props.editing}
              editId={props.editId}
              deleteBusiness={props.deleteBusiness}
              getAllBusinesses={props.getAllBusinesses}
              id={business.TripId}
              key={business.id}
              result={business}
              toggleEdit={props.toggleEdit}
            />) :
          <p className="second-text">Add a business to start</p>}
      </ul>
    </Col>
  );
};

export default BusinessDisplay;