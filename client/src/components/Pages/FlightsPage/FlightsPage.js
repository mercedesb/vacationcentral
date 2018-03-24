import React from "react";
import "./FlightsPage.css";
import FlightAdd from "./FlightAdd";
import FlightDisplay from "./FlightDisplay";
import { Grid, Row, Col } from 'react-bootstrap';

class FlightsPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    render() {
      console.log('these are my FlightsPage props!!', this.props)
      return (
        <Col xs={12} className="flights-page">
          <p>FlightsPage</p>
          <FlightAdd />
          <FlightDisplay />
        </Col>
      );
    }
  }
  
  export default FlightsPage;