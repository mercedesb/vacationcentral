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
        flightDisplayVisible: false
      };
    }


    handleToggleFlightDisplay = () => {
        console.log("flightDisplay is visible")
        this.setState({ flightDisplayVisible: !this.state.flightDisplayVisible })
      };


    render() {
      console.log('these are my FlightsPage props!!', this.props)
     return ( 
         <Col xs={12} className="flight-page">

             <Row>
                 <FlightAdd TripId={this.props.TripId} />
             </Row>

             <Row>
                 <FormBtn className='flight-btn' onClick={this.handleToggleFlightDisplay}>View Your Flights</FormBtn>
             </Row>

             <Row>
                 {this.state.flightDisplayVisible ? <FlightDisplay show={this.state.flightDisplayVisible} TripId={this.props.TripId} /> : null}
             </Row>

         </Col>     

      );
    }
  }
  
  export default FlightsPage;