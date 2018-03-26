import React from "react";
import "./FlightsPage.css";
import { Grid, Row, Col, Div } from 'react-bootstrap';
import {FormBtn, Input} from "../../Form";
import { List, ListItem } from "../../List";
import { Link } from "react-router-dom";
import API from "../../../utils/API";
import ButtonSubmitForm from "../../ButtonSubmitForm";
import DeleteBtn from "../../DeleteBtn";

class FlightsPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          res: [], 
          flightData: {}  
      };
    }


    // loadFlights = (tripId) => {
    //   API.getFlights(tripId)
    //     .then(res =>
    //       this.setState({flights: results: [results.data]
    //     )
    //     .catch(err => console.log(err));
    // };

    handleTripInputChange = event => {
      const {name, value} = event.target;
      this.setState(prevState => (
        { flightData: {
          ...prevState.flightData,
          TripId: this.props.tripId,
          [name]: value
      }
    }), () =>
      console.log("trip info", this.state.flightData));
    };

    handleFlightFormSubmit = (event) => {
      console.log("incoming flights state", this.state.flightData);
      event.preventDefault();
          API.saveFlights(this.state.flightData)
            .then(res => this.setState({results: [res.data], flightData: {}}))
            .then(() => console.log(this.state))
            .catch(err => console.log("flights error", err));
        } 


    render() {
      console.log('these are my FlightsPage props!!', this.props)
      return (
        <Col xs={12} className="flights-page">

          <p>Add a Flight</p>
          <form>
         
          <label>Flight Confirmation Number:</label>  
          <Input xs={4}
              value={this.state.confirmationNumber}
              name="confirmationNumber"
              onChange={this.handleTripInputChange}
              type="text"
              placeholder="Flight Confirmation Number"/>
         
          <label>Airline:</label>
          <Input xs={4}
              value={this.state.airline}
              name="airline"
              onChange={this.handleTripInputChange}
              type="text"
              placeholder="Airline"/>
          
          <label>Flight Number:</label>
          <Input xs={4}
              value={this.state.flightNumber}
              name="flightNumber"
              onChange={this.handleTripInputChange}
              type="text"
              placeholder="Flight Number" />
           
          <label>Departure Airport:</label>   
          <Input  xs={6}
              value={this.state.departLocation}
              name="departLocation"
              onChange={this.handleTripInputChange}
              type="text"
              placeholder="Departure Airport"/>
          
          <label>Departure Time:</label>
          <Input  xs={6}
              value={this.state.departTime}
              name="departTime"
              onChange={this.handleTripInputChange}
              type="text"
              placeholder="Departure Time"/>
          
          <label>Arrival Airport:</label> 
          <Input  xs={6}
              value={this.state.arriveLocation}
              name="arriveLocation"
              onChange={this.handleTripInputChange}
              type="text"
              placeholder="Arrival Airport"/>
          
          <label>Arrival Time:</label> 
          <Input  xs={6}
              value={this.state.arriveTime}
              name="arriveTime"
              onChange={this.handleTripInputChange}
              type="text"
              placeholder="Arrival Time"/>

          <FormBtn onClick={this.handleFlightFormSubmit} >Submit</FormBtn>
         
          </form>
              
              <p>Trip Display</p>

              <p>This is where our flights will display</p>


          {/* {this.flightsArray.map(flight => 
            <Grid className="flightDisplay">
              <p>Airline: {flight.airline}  FlightNo: {flight.flightNumber} ConfirmNo: {flight.confirmationNumber}</p>
              <p>Departure Airport: {flight.departLocation} Departure Time: {flight.departTime} </p> 
              <p>Arrival Airport: {flight.arriveLocation} Arrival Time: {flight.arriveTime} </p> 
              <DeleteBtn onClick={() => this.deleteFlights(flight.id)} /> 
            </Grid>
  )} */}


        </Col>
      );
    }
  }
  
  export default FlightsPage;