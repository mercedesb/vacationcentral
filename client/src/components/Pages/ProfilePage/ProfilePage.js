import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import "./ProfilePage.css";
import ProfileAdd from "./ProfileAdd";
import ProfileDisplay from "./ProfileDisplay";
import API from "../../../utils/API";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileDisplayVisible: true,
      results: [],
      editing: false,
      editId: 0
    };
    this.getProfiles = this.getProfiles.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deleteProfiles = this.deleteProfiles.bind(this);
    this.getProfilesByType = this.getProfilesByType.bind(this);
    this.handleToggleProfileDisplay = this.handleToggleProfileDisplay.bind(this);
  };

  /**
   * When page is called, requests the getProfiles function
   * @param {integer} props.UserId - profiles associated with logged in user
   */
  componentDidMount = () => {
    this.getProfiles(this.props.UserId);
  };

  /**
   * Monitors button click to make the rewards profile panel hidden or visible
   */
  handleToggleProfileDisplay = () => {
    this.getProfiles(this.props.UserId);
    this.setState({ profileDisplayVisible: !this.state.profileDisplayVisible })
  };

  /**
   * Monitors button click in the Profile Display section to make the rewards profile information editable
   * @param {boolean} editing 
   * @param {integer} editId - the database generated id number of the profile being edited
   */
  toggleEdit = event => {
    this.setState({
      editing: !this.state.editing,
      editId: event.target.id
    });
  };

  /**
   * Requests rewards profiles associated with the logged in user
   * @param {integer} UserId - database generated id of the logged in user
   */
  getProfiles = () => (
    API.getProfiles(this.props.UserId)
      .then(response => {
        this.setState({ results: response.data })
      })
  );

  /**
   * Makes API request for rewards profiles associated with the logged in user by the type of profile
   * @param {integer} UserId - database generated id of the logged in user
   * @param {string} profileType - Airline, Hotel or Rental Car
   */
  getProfilesByType = (event, profileType) => {
    event.preventDefault();
    API.getProfilesByType(this.props.UserId, profileType)
      .then(response => {
        this.setState({ results: response.data })
      })
  };

/**
 * Makes API call to delete a specific rewards profile
 * @param {integer} profileId - database assigned id of the profile being deleted
 */
  deleteProfiles = profileId => (
    API.deleteProfiles(profileId)
      .then(response => {
        this.getProfiles(this.props.UserId);
      })
  )


  render() {
    return (
      <Col xs={12} className="profile-page">
        <Row> <p className="header">Reward Programs</p> </Row>
        <Row>
          <button className='profile-btn' onClick={() => {
            this.getProfiles()
            .then(this.handleToggleProfileDisplay)
          }}>
            View Your Profiles
          </button>
        </Row>
        <Row>
          <button className='profile-btn' onClick={this.handleToggleProfileDisplay}>Add a Rewards Profile</button>
        </Row>
        <Row>
          {this.state.profileDisplayVisible ? <ProfileDisplay
            show={this.state.profileDisplayVisible}
            UserId={this.props.UserId}
            results={this.state.results}
            toggleEdit={this.toggleEdit}
            editing={this.state.editing}
            editId={this.state.editId}
            getProfiles={this.getProfiles}
            deleteProfiles={this.deleteProfiles}
            getProfilesByType={this.getProfilesByType}
            handleToggleProfileDisplay={this.handleToggleProfileDisplay}

          /> : null}
        </Row>
        <Row>
          <ProfileAdd
            getProfiles={this.getProfiles}
            UserId={this.props.UserId}
            handleToggleProfileDisplay={this.handleToggleProfileDisplay} />
        </Row>
      </Col>
    );
  }
}

export default ProfilePage;