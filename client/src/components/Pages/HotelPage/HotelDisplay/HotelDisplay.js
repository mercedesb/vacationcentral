import React from "react";
import "./HotelDisplay.css";
import { Grid, Row, Col } from 'react-bootstrap';

class HotelDisplay extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    render() {
      console.log('these are my hotel display props!!', this.props)
      return (
        <Col xs={12} className="hotel-display">
          <p>Hotel Display</p>
        </Col>
      );
    }
  }
  
  export default HotelDisplay;