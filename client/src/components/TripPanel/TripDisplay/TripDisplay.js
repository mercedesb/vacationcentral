import React from "react";
import "./TripDisplay.css";
import { Grid, Row, Col } from 'react-bootstrap';

class TripDisplay extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    render() {
      console.log('these are my Trip display props!!', this.props)
      return (
        <Col xs={12} className="Trip-display">
          <p>Trip Display</p>
        </Col>
      );
    }
  }
  
  export default TripDisplay;