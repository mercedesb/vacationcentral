import React from "react";
import "./TripDisplay.css";
import { Grid, Row, Col, Div } from 'react-bootstrap';
import {FormBtn, Input, TextArea} from "../../Form";
import { List, ListItem } from "../../List";
import { Link } from "react-router-dom";
import API from "../../../utils/API";
import DeleteBtn from "../../DeleteBtn";

class TripDisplay extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        results: [],
        tripData: {}
      };
    }
    
componentDidMount() {
     this.loadTrips();
    }


loadTrips = (user) => {
      API.getTrips(this.props.UserId)
        .then(res =>
          this.setState({trip: res.data, destination: "", start: "", end: "", id: "" })
        )
        .catch(err => console.log(err));
    };


    render() {

        if(!this.props.show){ return null; }
      
        console.log('these are my trip display props!!', this.props)
      
        return (
     
            <form>
              <p>Your Trips</p>



                  <Grid className="tripDisplay">
                        <FormBtn>Edit</FormBtn>
                      <input className="tag" type="checkbox" id={this.tripData.id} onChange/>
                      <p>Destination: {tripData.destination}</p> 
                      <p>To: {tripData.start} From: {trip.end}</p>
                      <DeleteBtn onClick={() => this.deleteTrips(tripData.id)} /> 
                  </Grid>


            </form>
      );
    }
  }

  export default TripDisplay;