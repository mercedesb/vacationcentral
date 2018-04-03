import React, { Component } from "react";
import "./ProfileAdd.css";
import { Input } from "../../../Form";
import API from "../../../../utils/API";

class ProfileAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: {},
      editData: {}
    };
  }

/**
 * Set the all the profile data when the ProfileAdd section is displayed
 * @param {object} props.profileData
 */
  componentDidMount() {
    if (this.props.profileData) {
      this.setState({ profileData: this.props.profileData });
    }
  }

  /**
  * Handles physical input of user profile information and adds it to the profileData object.
  * @param {object} profileData - input values becomes user data - company, rewards number, phone
  * @param {integer} UserId - id number of the logged in user
  * @param {object} editData - profile data assigned for editing
  * @param {integer} profileData.id - id of the specific profile to be edited
  */
  handleProfileInputChange = event => {
    const { name, value } = event.target;
    this.setState(prevState => (
      {
        profileData: {
          ...prevState.profileData,
          UserId: this.props.UserId,
          [name]: value
        },
        editData: {
          ...prevState.editData,
          id: this.state.profileData.id,
          [name]: value
        }
      }));
  };

    /**
   * Makes the API call to post the newly created profile information the database
   * @param {object} profileData - company, rewards number and phone
   * @param {integer} UserId 
   */
  handleProfileFormSubmit = event => {
    event.preventDefault();
    API.saveProfiles(this.state.profileData)
      .then(response => {
        this.setState({ profileData: {} });
        this.props.handleToggleProfileDisplay(this.props.UserId);
      })
      .catch(err => console.log(err));
  };

    /**
   * Function that edits the profile information and make the API call to update the information
   * @param {function} toggleEdit
   * @param {object} editData - information of profile to be edited
   * @param {integer} profileData.id - database id number of the profile to be edited
   * @param {object} profileData - returned information of the profile that was edited
   * @param {integer} UserId 
   */
  handleProfileEdit = event => {
    event.preventDefault();
    this.props.toggleEdit(event);
    API.updateProfiles(this.state.editData, this.state.profileData.id)
      .then(response => {
        console.log(response.data);
        this.setState({ profileData: {}, editData: {} });
        this.props.getProfiles(this.props.UserId);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="profile-add">
        <p className="prof-add-text">Add a company to your rewards profile</p>
        <form >
          <label className="profile-select-text">Select the Profile Type: </label>
          <select xs={12} value={this.state.profileData.type} name="type" onChange={this.handleProfileInputChange}>
            <option value="Airline">Airline</option>
            <option value="Hotel">Hotel</option>
            <option value="RentalCar">Rental Car</option>
          </select>
        </form>
        <label className="label-text">Company Name:</label>
        <Input style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
          value={this.state.profileData.company || ""}
          name="company"
          onChange={this.handleProfileInputChange}
          type="text"
          placeholder="Add Company Name" />
        <label className="label-text">Reward Number:</label>
        <Input style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
          value={this.state.profileData.memberNumber || ""}
          name="memberNumber"
          onChange={this.handleProfileInputChange}
          type="text"
          placeholder="Add Rewards Number" />
        <label className="label-text">Company Phone Number:</label>
        <Input style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
          value={this.state.profileData.phone || ""}
          name="phone"
          onChange={this.handleProfileInputChange}
          type="text"
          placeholder="Add Company Phone" />
        <button className="btn btn-lrg submit-btn" onClick={this.props.editing ? this.handleProfileEdit : this.handleProfileFormSubmit} >Submit</button>
      </div>
    );
  }
}

export default ProfileAdd;