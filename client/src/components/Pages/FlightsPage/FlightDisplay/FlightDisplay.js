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

            <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>

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
                <p className="second-text"> Add a flight to start</p>}

            </ul>
          </Col>
      );
    }
  }

  export default FlightDisplay;