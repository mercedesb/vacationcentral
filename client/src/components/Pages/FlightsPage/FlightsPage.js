import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import "./FlightsPage.css";
import FlightAdd from "./FlightAdd";
import FlightDisplay from "./FlightDisplay";
import API from "../../../utils/API";
import moment from "moment";

class FlightsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flightDisplayVisible: true,
      results: [],
      editing: false,
      editId: 0,
      flightAware: {},
    };
    this.getFlights = this.getFlights.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deleteFlights = this.deleteFlights.bind(this);
    this.handleToggleFlightDisplay = this.handleToggleFlightDisplay.bind(this);
  };

  /**
   * When page is called, requests the getFlights function 
   * @param {integer} props.TripId - profiles associated with logged in user
   */
  componentDidMount = () => {
    this.getFlights(this.props.TripId);
  };

  /**
   * Monitors button click to make the flight profile panel hidden or visible
   */
  handleToggleFlightDisplay = () => {
    this.getFlights(this.props.TripId);
    this.setState({ flightDisplayVisible: !this.state.flightDisplayVisible });
  };

   /**
   * Monitors button click in the Flight Display section to make the flight information editable
   * @param {boolean} editing 
   * @param {integer} event.target.id - the database generated id number of the flight being edited
   */
  toggleEdit = event => {
    this.setState({
      editing: !this.state.editing,
      editId: event.target.id
    });
  };

  /**
   * Requests all flights associated with the specific trip
   * @param {integer} TripId
   */
  getFlights = () => (
    API.getFlights(this.props.TripId)
      .then(response => {
        for (var i = 0; i < response.data.length; i++) {
          response.data[i].date = moment(response.data[i].date).format('MM-DD-YYYY');
        }
        this.setState({ results: response.data })
      })
  );

/**
 * Makes API call to delete a specific flight, then gets all flights for new render
 * @param {integer} flightId - database assigned id of the flight being deleted
 * @param {integer} TripId
 */
  deleteFlights = (event, flightId, TripId) => {
    event.preventDefault();
    API.deleteFlights(flightId)
      .then(response => {
        this.getFlights(this.props.TripId);
      })
  }

  render() {
    return (
      <Col xs={12} className="flights-page">
        <Row> <p className="header">Flight Information</p> </Row>
        <Row>
          <button className='flight-btn' onClick={() => {
            this.getFlights()
              .then(this.handleToggleFlightDisplay)
          }}>
            View Your Flights
          </button>
        </Row>
        <Row>
          <button className='flight-btn' onClick={this.handleToggleFlightDisplay}>Add a Flight</button>
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
            deleteFlights={this.deleteFlights}
            handleToggleFlightDisplay={this.handleToggleFlightDisplay}
            callFlightAware={this.callFlightAware}
          /> : null}
        </Row>
        <Row>
          <FlightAdd
            getFlights={this.getFlights}
            TripId={this.props.TripId}
            handleToggleFlightDisplay={this.handleToggleFlightDisplay} />
        </Row>
      </Col>
    );
  }
}

export default FlightsPage;