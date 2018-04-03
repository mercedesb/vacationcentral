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

/**
 * Set the all the trip data when the TripAdd section is displayed
 * @param {object} props.tripData
 */
  componentDidMount() {
    if (this.props.tripData) {
      this.setState({ tripData: this.props.tripData });
    }
  }

  /**
  * Handles physical input of user trip information and adds it to the tripData object.
  * @param {object} tripData - input values becomes user data - name, email password
  * @param {integer} UserId - id number of the logged in user
  * @param {object} editData - trip data assigned for editing
  * @param {integer} tripData.id - id of the specific trip to be edited
  */
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

  /**
   * Makes the API call to post the newly created trip information the database
   * @param {object} tripData - name, start and end date of trip
   * @param {integer} UserId - all trips when posted to database are associated with the logged in user
   */
  handleTripFormSubmit = event => {
    event.preventDefault();
    console.log("trip data", this.state.tripData);
    if (this.state.tripData.start < this.state.tripData.end) {
      API.saveTrips(this.state.tripData)
        .then(response => {
          this.setState({ tripData: {} });
          this.props.getTrips(this.props.UserId);
        })
        .catch(err => console.log(err));
    } else { alert("Your return date must be after your departure date") }
  }

  /**
   * Function that edits the trip information and make the API call to update the information
   * @param {function} toggleEdit
   * @param {object} editData - information of trip to be edited
   * @param {integer} tripData.id - database id number of the trip to be edited
   * @param {object} tripData - returned information of the trip that was edited
   * @param {integer} UserId - user id associated with the logged in user
   */
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
            placeholder=" MM/DD/YYYY" />
          <label className="label-text">End Date:</label>
          <Input style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
            value={this.state.tripData.end || ""}
            name="end"
            onChange={this.handleTripInputChange}
            type="date"
            placeholder="MM/DD/YYYY" />
          <button className="btn btn-lrg submit-btn" onClick={this.props.editing ? this.handleTripEdit : this.handleTripFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default TripAdd;