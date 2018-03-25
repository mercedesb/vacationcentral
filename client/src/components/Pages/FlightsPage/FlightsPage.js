import React from "react";
import "./FlightsPage.css";
import { Grid, Row, Col } from 'react-bootstrap';

class FlightsPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        confirmationNumber: "",
        airline: "",
        flightNumber: "",
        departLocation: "",
        arriveLocation: "",
        departTime: "",
        arriveTime: "",
        flightsArray: []
        
      }
    }

    loadFlights = user => {
      API.getFlights(user)
        .then(res =>
          this.setState({flights: res.data, 
          confirmationNumber: "",
          airline: "",
          flightNumber: "",
          departLocation: "",
          arriveLocation: "",
          departTime: "",
          arriveTime: ""  })
        )
        .catch(err => console.log(err));
    };

    handleTripInputChange = event => {
      const {name, value} = event.target;
      this.setState({
        [name]: value
      });
      console.log("trip info", this.state.airline, this.state.flightNumber, this.state.confirmationNumber);
      console.log("state", this.state);
    };

    handleFlightFormSubmit = (event) => {
      event.preventDefault();
        console.log("incoming state", this.props.userId, this.state);
        if (this.state.airline && this.state.flightNumber && this.state.confirmationNumber) {
          API.saveFlights({ 
            TripId: this.props.tripid,
            confirmationNumber: this.state.confirmationNumber,
            airline: this.state.airline,
            flightNumber: this.state.flightNumber,
            departLocation: this.state.departLocation,
            arriveLocation: this.state.arriveLocation,
            departTime: this.state.departTime,
            arriveTime: this.state.arriveTime
          })
            // .then(res => loadFlights(user))
            .catch(err => console.log(err));
        } else { alert("Missing fields")};
    };


    render() {
      console.log('these are my FlightsPage props!!', this.props)
      return (
        <Col xs={12} className="flights-page">
          <p>FlightsPage</p>
          <p>Add a Flight</p>
          <Input 
              value={this.state.confirmationNumber}
              name="confirmationNumber"
              onChange={this.handleTripInputChange}
              type="text"
              placeholder="Add Flight Confirmation Number"/>
          <Input 
              value={this.state.airline}
              name="airline"
              onChange={this.handleTripInputChange}
              type="text"
              placeholder="Add the Airline"/>
          <Input 
              value={this.state.flightNumber}
              name="flightNumber"
              onChange={this.handleTripInputChange}
              type="text"
              placeholder="Add a Flight Number" />
          <Input 
              value={this.state.departTime}
              name="departTime"
              onChange={this.handleTripInputChange}
              type="text"
              placeholder="Add the Departure Time"/>
          <Input 
              value={this.state.arriveLocation}
              name="arriveLocation"
              onChange={this.handleTripInputChange}
              type="text"
              placeholder="Add the Arrival Airport"/>
          <Input 
              value={this.state.arriveTime}
              name="arriveTime"
              onChange={this.handleTripInputChange}
              type="text"
              placeholder="Add the Arrival Time"/>

        
        <ButtonSubmitForm onClick={() => this.handleFlightFormSubmit()} /> 

              <p>Trip Display</p>

              <p>This is where our flights will display</p>


          {this.flightsArray.map(flight => 
            <Div className="flightDisplay">
              <p>Airline: {flight.airline}  FlightNo: {flight.flightNumber} ConfirmNo: {flight.confirmationNumber}</p>
              <p>Departure Airport: {flight.departLocation} Departure Time: {flight.departTime} </p> 
              <p>Arrival Airport: {flight.arriveLocation} Arrival Time: {flight.arriveTime} </p> 
              <DeleteBtn onClick={() => this.deleteFlights(flight.id)} /> 
            </Div>
  )}


        </Col>
      );
    }
  }
  
  export default FlightsPage;