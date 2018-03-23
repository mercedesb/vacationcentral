import React from "react";
import "./TripPanel.css";
import { Grid, Row, Col } from 'react-bootstrap';

class TripPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    render() {
      console.log('these are my props!!', this.props)
      return (
        <Col xs={2} className="trip-panel">
            <h1>TripPanel</h1>
        </Col>
      );
    }
  }
  
  export default TripPanel;