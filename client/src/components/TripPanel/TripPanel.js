import React from "react";
import "./TripPanel.css";
import { Grid, Row, Col } from 'react-bootstrap';
import TripAdd from "./TripAdd";
import TripDisplay from "./TripDisplay";

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
            <p>TripPanel</p>
            <TripAdd />
            <TripDisplay />
        </Col>
      );
    }
  }
  
  export default TripPanel;