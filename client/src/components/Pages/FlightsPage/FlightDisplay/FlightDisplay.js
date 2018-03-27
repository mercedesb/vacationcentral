import React from "react";
import "./FlightDisplay.css";
import FlightListItem from "././FlightListItem";
import { Grid, Row, Col, Div } from 'react-bootstrap';
import {FormBtn, Input, TextArea} from "../../../Form";



class FlightDisplay extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    

    render() {

        if(!this.props.show){ return null; }
        console.log('these are my flight display props!!', this.props)
      
        return (
          <Col xs={12} className="flight-display">
          <h1>Your Flights</h1>
      <ul>

        {this.props.results.length !== 0 ?
            this.props.results.map(flight => 
            <FlightListItem
              editing={this.props.editing}
              editId={this.props.editId}
              getFlights={this.props.getFlights}
              id={flight.id}
              key={flight.id}
              result={flight}
              toggleEdit={this.props.toggleEdit}
            />) :
        <h3> Add a flight to start</h3>}          

        </ul>
      </Col>
      );
    }
  }

  export default FlightDisplay;