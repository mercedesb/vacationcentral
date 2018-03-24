import React from "react";
import "./TripAdd.css";
import { Grid, Row, Col } from 'react-bootstrap';
import {FormBtn, Input, TextArea} from "../../Form";
import ButtonSubmitForm from "../../ButtonSubmitForm";



class TripAdd extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        destination: "", 
        start: "", 
        end: "",  
      }
    }
    

    handleTripInputChange = event => {
      const {name, value} = event.target;
      this.setState({
        [name]: value
      });
      console.log("trip info", this.state.destination, this.state.start, this.state.end);
      console.log("state", this.state);
    };
    
    render() {
      return (
        <Col xs={12} className="trip-add">
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
              placeholder="Add Departure Date" /> 
          <Input              
              value={this.state.end}
              name="end"
              onChange={this.handleTripInputChange}
              type="text"
              placeholder="Add Return Date" />
          <ButtonSubmitForm onClick={() => this.props.handleTripFormSubmit(this.state)} />
        </Col>
      );
    }
  }
  
  export default TripAdd;