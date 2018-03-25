import React from "react";
import "./BusinessDisplay.css";
import { Grid, Row, Col } from 'react-bootstrap';

class BusinessDisplay extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    render() {
      // console.log('these are my Business display props!!', this.props)
      return (
        <Col xs={12} className="business-display">
          <p>Hotel Display</p>
        </Col>
      );
    }
  }
  
  export default BusinessDisplay;