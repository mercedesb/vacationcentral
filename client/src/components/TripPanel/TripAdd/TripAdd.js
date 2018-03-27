import React, {Component} from "react";
import "./TripAdd.css";
import { Grid, Row, Col, Div } from 'react-bootstrap';
import {FormBtn, Input, TextArea} from "../../Form";
import API from "../../../utils/API";

class TripAdd extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tripData: {}, 
        editData: {}
      };
    }

componentDidMount() {
      if(this.props.tripData) {
        this.setState({tripData: this.props.tripData});
      }
    }

    handleTripInputChange = event => {
      const {name, value} = event.target;
      this.setState(prevState => (
      {  tripData: {
        ...prevState.tripData,
        UserId: this.props.UserId,
        [name]: value
        }, 
        editData: {
          ...prevState.editData, 
          id: this.state.tripData.id, 
          [name]: value
        }
      }), () =>
        console.log("trip info", this.state.tripData));
    };

    handleTripFormSubmit = event => {
      console.log("incoming trip state", this.state.tripData);
      event.preventDefault();
          API.saveTrips(this.state.tripData)
            .then(response => {
              this.setState({ tripData: {}});
              this.props.getTrips(this.props.UserId);
            })
            .catch(err => console.log("error Trip Form Submit", err));
    }

    handleTripEdit = event => {
      console.log("handle trip edit", this.state.tripData)
      event.preventDefault();
      this.props.toggleEdit(event);
      API.updateTrips(this.state.editData, this.state.tripData.id)
        .then(response =>{
          console.log(response.data);
          this.setState({tripData: {}, editData: {}});
          this.props.getTrips(this.props.UserId);
        })
          .catch(err => console.log("trip update error", err));
    }
    
    render() {
        console.log('these are my trip add props!!', this.props)
        

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

          <FormBtn onClick={this.props.editing ? this.handleTripEdit : this.handleTripFormSubmit}>Submit</FormBtn>
          </form>
          

        </div>
      );
    }
  }
  
  export default TripAdd;