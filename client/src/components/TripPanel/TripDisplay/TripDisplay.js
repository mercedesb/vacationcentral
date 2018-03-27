import React from "react";
import "./TripDisplay.css";
import { Grid, Row, Col, Div } from 'react-bootstrap';
import {FormBtn, Input, TextArea} from "../../Form";
import TripListItem from "././TripListItem";


class TripDisplay extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      };

    }

    render() {

        if(!this.props.show){ return null; }
        console.log('these are my trip display props!!', this.props)
      
        return (
     
      <Col xs={12} className="trip-display">
          <h1>Your Trips</h1>
       <ul>

        {this.props.results.length !== 0 ?
            this.props.results.map(trip => 
            <TripListItem
              editing={this.props.editing}
              editId={this.props.editId}
              getTrips={this.props.getTrips}
              id={trip.id}
              key={trip.id}
              result={trip}
              toggleEdit={this.props.toggleEdit}
            />) :
        <h3> Add a trip to start</h3>}          

        </ul>
        </Col>
      );
    }
  }

  export default TripDisplay;