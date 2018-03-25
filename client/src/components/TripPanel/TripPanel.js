import React from "react";
import "./TripPanel.css";
import { Grid, Row, Col, Div } from 'react-bootstrap';
import {Input} from "../Form";
import { List, ListItem } from "../List";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import ButtonSubmitForm from "../ButtonSubmitForm";
import DeleteBtn from "../DeleteBtn";

class TripPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: "",
        id: "",
        destination: "", 
        start: "", 
        end: "", 
        tripsArray: [] 
      }
    }
    
    loadTrips = user => {
      API.getTrips(user)
        .then(res =>
          this.setState({trips: res.data, destination: "", start: "", end: "", id: "" })
        )
        .catch(err => console.log(err));
    };

    handleTripInputChange = event => {
      const {name, value} = event.target;
      this.setState({
        [name]: value
      });
      console.log("trip info", this.state.destination, this.state.start, this.state.end);
      console.log("state", this.state);
    };

    handleTripFormSubmit = (event) => {
      event.preventDefault();
        console.log("incoming state", this.props.userId, this.state);
        if (this.state.destination && this.state.start && this.state.end) {
          API.saveTrips({
            UserId: this.props.user,
            destination: this.state.destination,
            start: this.state.start,
            end: this.state.end
          })
            // .then(res => loadTrips(user))
            .catch(err => console.log(err));
        } else { alert("Missing fields")};
    };
    
    render() {
      console.log('these are my props!!', this.props)
      return (
        <Col xs={2} className="trip-panel">
            <p>TripPanel</p>

            <p>Trip Add</p>

          <Input 
              value={this.state.destination}
              name="destination"
              onChange={this.handleTripInputChange}
              type="text"
              placeholder="Add Trip Name"/>
          <Input 
              value={this.state.start}
              name="start"
              onChange={this.handleTripInputChange}
              type="text"
              placeholder="Add Departure MM-DD-YYYY" /> 
          <Input              
              value={this.state.end}
              name="end"
              onChange={this.handleTripInputChange}
              type="text"
              placeholder="Add Return MM-DD-YYYY" />

          <ButtonSubmitForm onClick={() => this.handleTripFormSubmit()} />

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