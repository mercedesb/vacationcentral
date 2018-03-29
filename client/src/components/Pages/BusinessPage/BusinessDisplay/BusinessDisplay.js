import React from "react";
import "./BusinessDisplay.css";
import { Grid, Row, Col } from 'react-bootstrap';
import BusinessListItem from "./BusinessListItem"


class BusinessDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    if(!this.props.show){ return null; }
      
    console.log('these are my business display props!!', this.props)


    return(
  <Col xs={12} >
    <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>

      {this.props.results.length !== 0 ? 
        this.props.results
          .filter(business => business.type === this.props.businessType)
          .map(business => <BusinessListItem 
            editing={this.props.editing}
            editId={this.props.editId}
            getAllBusinesses={this.props.getAllBusinesses}
            id={business.TripId}
            key={business.TripId} 
            result={business} 
            toggleEdit={this.props.toggleEdit} 
          />) :
          <p className="second-text">Add a business to start</p>}
    </ul>
  </Col>
);
  }}

export default BusinessDisplay;