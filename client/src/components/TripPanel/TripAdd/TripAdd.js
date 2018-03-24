import React from "react";
import "./TripAdd.css";
import { Grid, Row, Col } from 'react-bootstrap';
import {FormBtn, Input, TextArea} from "../../Form";

class TripAdd extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }
    
    render() {
      console.log('these are my trip add props!!', this.props)
      return (
        <Col xs={12} className="trip-add">
          <p>Trip Add</p>
          <Input placeholder="Add Trip Name"/>
          <Input placeholder="Add Departure Date" /> 
          <Input placeholder="Add Return Date" />
        </Col>
      );
    }
  }
  
  export default TripAdd;