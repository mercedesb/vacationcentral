import React from "react";
import "./FlightAdd.css";
import { Grid, Row, Col } from 'react-bootstrap';
import {FormBtn, Input} from "../../../Form";

class FlightAdd extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    render() {
      console.log('these are my flightadd props!!', this.props)
      return (
        <Col xs={12} className="flight-add">
          <p>FlightAdd</p>
          <Input placeholder="Add Airline"/>
          <Input placeholder="Add Confirmation Number" />
          <Input placeholder="Add FlightNumber" />
        </Col>
      );
    }
  }
  
  export default FlightAdd;