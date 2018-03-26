import React from "react";
import "./FlightDisplay.css";
import { Grid, Row, Col, Div } from 'react-bootstrap';
import {FormBtn, Input, TextArea} from "../../../Form";
import { Link } from "react-router-dom";
import API from "../../../../utils/API";


class FlightDisplay extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        results: [],
        flightData: {}
      };
    }
    
componentDidMount() {
     this.loadFlights(this.props.TripId);
    }


loadFlights = (TripId) => {
      API.getFlights(TripId)
        .then(response =>
          this.setState({ results: response.data }, () => console.log(this.state))
        )
        .catch(err => console.log(err));
    };


    render() {

        if(!this.props.show){ return null; }
      
        console.log('these are my flight display props!!', this.props)
      
        return (
     
            <form className="flight-display">
              <p>Your Flights</p>



                  {/* <Grid className="tripDisplay">
                        <FormBtn>Edit</FormBtn>
                      <input className="tag" type="checkbox" id={this.tripData.id} onChange/>
                      <p>Destination: {tripData.destination}</p> 
                      <p>To: {tripData.start} From: {trip.end}</p>
                      <DeleteBtn onClick={() => this.deleteTrips(tripData.id)} /> 
                  </Grid> */}


            </form>
      );
    }
  }

  export default FlightDisplay;