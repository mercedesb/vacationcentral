import React from "react";
import "./FlightDisplay.css";
import { Grid, Row, Col } from 'react-bootstrap';

class FlightDisplay extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    render() {
      console.log('these are my flightdisplay props!!', this.props)
      return (
        <Col xs={12} className="flight-display">
          <h1>FlightDisplay</h1>
        </Col>
      );
    }
  }
  
  export default FlightDisplay;