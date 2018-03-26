import React from "react";
import "./TripPanel.css";
import { Grid, Row, Col, Div } from 'react-bootstrap';
import {FormBtn, Input, TextArea} from "../Form";
import { List, ListItem } from "../List";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import DeleteBtn from "../DeleteBtn";

class TripPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        res: [],
        tripData: {}
      };
    }
    
    // loadTrips = (user) => {
    //   API.getTrips(this.props.UserId)
    //     .then(res =>
    //       this.setState({trip: res.data, destination: "", start: "", end: "", id: "" })
    //     )
    //     .catch(err => console.log(err));
    // };

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
      console.log("incoming trip state", this.state);
      event.preventDefault();
        if (this.state.destination && this.state.start && this.state.end) {
          API.saveTrips(this.state.tripData)
            .then(res => this.setState({results: [res.data], tripData: {}}))
            .then(() => console.log("trip state back", this.state))
            .catch(err => console.log("error Trip Form Submit", err));
        } 
    };
    
    render() {
      console.log('these are my props!!', this.props)
      return (
        <Col xs={2} className="trip-panel" >

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
          
              <p>Trip Display</p>

              <p>This is where our trips will display</p>


                {/* {this.tripsArray.map(trip => 
                  <Grid className="tripDisplay">
                      <input className="tag" type="checkbox" id={this.trip.id} onChange/>
                      <p>Destination: {trip.destination}</p> 
                      <p>To: {trip.start} From: {trip.end}</p>
                      <DeleteBtn onClick={() => this.deleteTrips(trip.id)} /> 
                  </Grid>
                )} */}

        </Col>
      );
    }
  }
  
  export default TripPanel;