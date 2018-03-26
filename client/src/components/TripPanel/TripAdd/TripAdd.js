import React from "react";
import "./TripAdd.css";
import { Grid, Row, Col, Div } from 'react-bootstrap';
import {FormBtn, Input, TextArea} from "../../Form";
import { List, ListItem } from "../../List";
import { Link } from "react-router-dom";
import API from "../../../utils/API";

class TripAdd extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        results: [],
        tripData: {}
      };
    }

    handleTripInputChange = event => {
      const {name, value} = event.target;
      this.setState(prevState => (
      {  tripData: {
        ...prevState.tripData,
        UserId: this.props.userId,
        [name]: value
        }
      }), () =>
        console.log("trip info", this.state.tripData));
    };

    handleTripFormSubmit = event => {
      console.log("incoming trip state", this.state.tripData);
      event.preventDefault();
          API.saveTrips(this.state.tripData)
            .then(response => this.setState({ results: [response.data], tripData: {}}))
            .then(() => console.log("trip state back", this.state))
            .then(() => this.state.tripData.destination.value="")
            .catch(err => console.log("error Trip Form Submit", err));
    };
    
    render() {
        console.log('these are my trip add props!!', this.props)
        
        if(!this.props.show){ return null; }

       return (
        <div>

            <p>Add A Trip</p>
         <form> 
          <label>Destination:</label>
          <Input xs={12}
              value={this.state.tripData.destination}
              name="destination"
              onChange={this.handleTripInputChange}
              type="text"
              placeholder="Add Trip Name" />

          <label>Begin Date:</label>
          <Input xs={12}
              value={this.state.tripData.start}
              name="start"
              onChange={this.handleTripInputChange}
              type="date"
              placeholder=" MM-DD-YYYY" /> 

          <label>End Date:</label>
          <Input xs={12}             
              value={this.state.tripData.end}
              name="end"
              onChange={this.handleTripInputChange}
              type="date"
              placeholder="MM-DD-YYYY" />

          <FormBtn onClick={this.handleTripFormSubmit}>Submit</FormBtn>
          </form>
          

        </div>
      );
    }
  }
  
  export default TripAdd;