import React, { Component } from "react";
import "./FlightAdd.css";
import { Row } from 'react-bootstrap';
import { Input } from "../../../Form";
import API from "../../../../utils/API";
import { Link } from "react-router-dom";

class FlightAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightData: {},
      editData: {}
    };
  }

  componentDidMount() {
    if (this.props.flightData) {
      this.setState({ flightData: this.props.flightData });
    }
  }

  handleFlightInput = event => {
    const { name, value } = event.target;
    this.setState(prevState => (
      {
        flightData: {
          ...prevState.flightData,
          TripId: this.props.TripId,
          [name]: value
        },
        editData: {
          ...prevState.editData,
          id: this.state.flightData.id,
          [name]: value
        }
      }));
  };

  handleFlightFormSubmit = event => {
    event.preventDefault();
    API.saveFlights(this.state.flightData)
      .then(response => {
        this.setState({ flightData: {} });
        this.props.getFlights(this.props.TripId);
      })
      .catch(err => console.log(err));
  }

  handleFlightEdit = event => {
    event.preventDefault();
    this.props.toggleEdit(event);
    API.updateFlights(this.state.editData, this.state.flightData.id)
      .then(response => {
        console.log(response.data);
        this.setState({ flightData: {}, editData: {} });
        this.props.getFlights(this.props.TripId);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="flight-add">
        <p className="second-text">Add a Flight</p>
        <div>
          <Row>
            <label className="label-text">Confirmation Number:</label>
            <Input xs={4} style={{ width: "50%", margin: "0 auto", textAlign: "center" }}
              value={this.state.flightData.confirmationNumber || ""}
              name="confirmationNumber"
              onChange={this.handleFlightInput}
              type="text"
              placeholder="Confirmation Number" />
            <label className="label-text">Flight Date:</label>
            <Input xs={4} style={{ width: "50%", margin: "0 auto", textAlign: "center" }}
              value={this.state.flightData.date || ""}
              name="date"
              onChange={this.handleFlightInput}
              type="date"
              placeholder="MM-DD-YYYY" />
            <label className="label-text">Airline:</label>
            <Input xs={4} style={{ width: "50%", margin: "0 auto", textAlign: "center" }}
              value={this.state.flightData.airline || ""}
              name="airline"
              onChange={this.handleFlightInput}
              type="text"
              placeholder="Airline" />
            <label className="label-text">Flight Number:</label>
            <Input xs={4} style={{ width: "50%", margin: "0 auto", textAlign: "center" }}
              value={this.state.flightData.flightNumber || ""}
              name="flightNumber"
              onChange={this.handleFlightInput}
              type="text"
              placeholder="Airline Code & Flight #" />
          </Row>
          <Row>
            <label className="label-text">Departure Airport:</label>
            <Input xs={6} style={{ width: "50%", margin: "0 auto", textAlign: "center" }}
              value={this.state.flightData.departLocation || ""}
              name="departLocation"
              onChange={this.handleFlightInput}
              type="text"
              placeholder="Departure Airport Code" />
            <label className="label-text">Departure Time:</label>
            <Input xs={6} style={{ width: "50%", margin: "0 auto", textAlign: "center" }}
              value={this.state.flightData.departTime || ""}
              name="departTime"
              onChange={this.handleFlightInput}
              type="text"
              placeholder="Departure Time" />
          </Row>
          <Row>
            <label className="label-text">Arrival Airport:</label>
            <Input style={{ width: "50%", margin: "0 auto", textAlign: "center" }}
              value={this.state.flightData.arriveLocation || ""}
              name="arriveLocation"
              onChange={this.handleFlightInput}
              type="text"
              placeholder="Arrival Airport Code" />
            <label className="label-text">Arrival Time:</label>
            <Input style={{ width: "50%", margin: "0 auto", textAlign: "center" }}
              value={this.state.flightData.arriveTime || ""}
              name="arriveTime"
              onChange={this.handleFlightInput}
              type="text"
              placeholder="Arrival Time" />
          </Row>
          <Row>
            <button className="flight-edit-btn"><Link to={"http://www.azworldairports.com/indexes/p-alica.cfm"} target="_blank">Search Airline Codes</Link></button>
            <button className="flight-edit-btn" onClick={this.props.editing ? this.handleFlightEdit : this.handleFlightFormSubmit} >Submit Flight</button>
          </Row>
        </div>
      </div>
    );
  }
}

export default FlightAdd;