import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import "./FlightsPage.css";
import FlightAdd from "./FlightAdd";
import FlightDisplay from "./FlightDisplay";
import API from "../../../utils/API";

class FlightsPage extends Component {
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
  }

  componentDidMount = () => {
    this.getFlights(this.props.TripId);
  }

  handleToggleFlightDisplay = () => {
    this.getFlights(this.props.TripId);
    this.setState({ flightDisplayVisible: !this.state.flightDisplayVisible });
  };

  toggleEdit = event => {
    this.setState({
      editing: !this.state.editing,
      editId: event.target.id
    });
  };

  getFlights = () => (
    API.getFlights(this.props.TripId)
      .then(response => {
        this.setState({ results: response.data })
      })
  );

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