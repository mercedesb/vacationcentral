import React from "react";
import "./FlightsPage.css";
import FlightAdd from "./FlightAdd";
import FlightDisplay from "./FlightDisplay";
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
        flightDisplayVisible: false, 
        results: [],
        editing: false,
        editId: 0,
        flightAware: {}
      };
      this.getFlights = this.getFlights.bind(this);
      this.toggleEdit = this.toggleEdit.bind(this);
    }

    handleToggleFlightDisplay = () => {
        console.log("flightDisplay is visible")
        this.getFlights(this.props.TripId);
        this.setState({ flightDisplayVisible: !this.state.flightDisplayVisible })
      };

    toggleEdit = event => {
        console.dir(event.target.id);
        this.setState({
          editing: !this.state.editing,
          editId: event.target.id
        }, () => console.log("toggle edit", this.state));
      };
    
    getFlights = () => (
        API.getFlights(this.props.TripId)
        .then(response => {
          this.setState({results: response.data}, () => console.log("get Flights working", this.state))
        })
      );

  
    render() {
      console.log('these are my FlightsPage props!!', this.props)
     return ( 
         <Col xs={12} className="flights-page">

              <Row> <p className="header">Flight Information</p> </Row>
              
              <Row>
                 <button className='flight-btn' onClick={this.handleToggleFlightDisplay}>View Your Flights</button>
             </Row>

            <Row>
                 <button className='flight-btn'>Add a Flight</button>
             </Row>


             <Row>
                 {this.state.flightDisplayVisible ? <FlightDisplay 
                 show={this.state.flightDisplayVisible}
                 TripId={this.props.TripId}
                 results={this.state.results}
                 toggleEdit={this.toggleEdit}
                 editing={this.state.editing}
                 editId={this.state.editId}
                 getFlights={this.getFlights}
                 callFlightAware={this.callFlightAware} 
                 /> : null}
             </Row>

              <Row>
                 <FlightAdd 
                 getFlights={this.getFlights}
                 TripId={this.props.TripId} />
             </Row>

         </Col>     

      );
    }
  }
  
  export default FlightsPage;