import React from "react";
import "./FlightAdd.css";
import { Grid, Row, Col, Div } from 'react-bootstrap';
import {FormBtn, Input, TextArea} from "../../../Form";
import API from "../../../../utils/API";

class FlightAdd extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        results: [],
        flightData: {}
      };
    }

    handleFlightInput = event => {
      const {name, value} = event.target;
      this.setState(prevState => (
       { flightData: {
         ...prevState.flightData,
         TripId: this.props.TripId,
        [name]: value
      }
       }), () =>
      console.log("flight info", this.state.flightData));
    };



    handleFlightFormSubmit = event => {
        console.log("incoming flight state", this.state.flightData);
      event.preventDefault();
          API.saveFlights(this.state.flightData)
            .then(response => this.setState({ results: [response.data], flightData: {}}))
            .then(() => console.log("flight state back", this.state))
            .catch(err => console.log("error flight  Form Submit", err));
    };
    
    render() {
        console.log('these are my flight add props!!', this.props)
        

       return (
        <div>

           <p>Add a flight</p>
          
        <form>
         
         <label>Flight Confirmation Number:</label>  
         <Input xs={4}
             value={this.state.confirmationNumber}
             name="confirmationNumber"
             onChange={this.handleFlightInput}
             type="text"
             placeholder="Flight Confirmation Number"/>
        
         <label>Airline:</label>
         <Input xs={4}
             value={this.state.airline}
             name="airline"
             onChange={this.handleFlightInput}
             type="text"
             placeholder="Airline"/>
         
         <label>Flight Number:</label>
         <Input xs={4}
             value={this.state.flightNumber}
             name="flightNumber"
             onChange={this.handleFlightInput}
             type="text"
             placeholder="Flight Number" />
          
         <label>Departure Airport:</label>   
         <Input  xs={6}
             value={this.state.departLocation}
             name="departLocation"
             onChange={this.handleFlightInput}
             type="text"
             placeholder="Departure Airport"/>
         
         <label>Departure Time:</label>
         <Input  xs={6}
             value={this.state.departTime}
             name="departTime"
             onChange={this.handleFlightInput}
             type="text"
             placeholder="Departure Time"/>
         
         <label>Arrival Airport:</label> 
         <Input  xs={6}
             value={this.state.arriveLocation}
             name="arriveLocation"
             onChange={this.handleFlightInput}
             type="text"
             placeholder="Arrival Airport"/>
         
         <label>Arrival Time:</label> 
         <Input  xs={6}
             value={this.state.arriveTime}
             name="arriveTime"
             onChange={this.handleFlightInput}
             type="text"
             placeholder="Arrival Time"/>

         <FormBtn onClick={this.handleFlightFormSubmit} >Submit</FormBtn>
        
         </form>
          

        </div>
      );
    }
  }
  
  export default FlightAdd;