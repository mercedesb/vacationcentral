import React, { Component } from "react";
import "./TripAdd.css";
import { Input } from "../../Form";
import API from "../../../utils/API";

class TripAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripData: {},
      editData: {}
    };
  }

  componentDidMount() {
    if (this.props.tripData) {
      this.setState({ tripData: this.props.tripData });
    }
  }

  handleTripInputChange = event => {
    const { name, value } = event.target;
    this.setState(prevState => (
      {
        tripData: {
          ...prevState.tripData,
          UserId: this.props.UserId,
          [name]: value
        },
        editData: {
          ...prevState.editData,
          id: this.state.tripData.id,
          [name]: value
        }
      }));
  };

  handleTripFormSubmit = event => {
    event.preventDefault();
    if (this.state.tripData.start < this.state.tripData.end) {
      API.saveTrips(this.state.tripData)
        .then(response => {
          this.setState({ tripData: {} });
          this.props.getTrips(this.props.UserId);
        })
        .catch(err => console.log(err));
    } else { alert("Your return date must be after your departure date") }
  }

  handleTripEdit = event => {
    event.preventDefault();
    this.props.toggleEdit(event);
    API.updateTrips(this.state.editData, this.state.tripData.id)
      .then(response => {
        console.log(response.data);
        this.setState({ tripData: {}, editData: {} });
        this.props.getTrips(this.props.UserId);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <form>
          <label className="label-text">Destination:</label>
          <Input style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
            value={this.state.tripData.destination || ""}
            name="destination"
            onChange={this.handleTripInputChange}
            type="text"
            placeholder="Destination" />
          <label className="label-text">Start Date:</label>
          <Input style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
            value={this.state.tripData.start || ""}
            name="start"
            onChange={this.handleTripInputChange}
            type="date"
            placeholder=" MM-DD-YYYY" />
          <label className="label-text">End Date:</label>
          <Input style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
            value={this.state.tripData.end}
            name="end"
            onChange={this.handleTripInputChange || ""}
            type="date"
            placeholder="MM-DD-YYYY" />
          <button className="btn btn-lrg submit-btn" onClick={this.props.editing ? this.handleTripEdit : this.handleTripFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default TripAdd;