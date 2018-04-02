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
  }

  componentDidMount = () => {
    this.getProfiles(this.props.UserId);
  }

  handleToggleProfileDisplay = () => {
    this.getProfiles(this.props.UserId);
    this.setState({ profileDisplayVisible: !this.state.profileDisplayVisible })
  };

  toggleEdit = event => {
    this.setState({
      editing: !this.state.editing,
      editId: event.target.id
    });
  };

  getProfiles = () => (
    API.getProfiles(this.props.UserId)
      .then(response => {
        this.setState({ results: response.data })
      })
  );

  getProfilesByType = (event, profileType) => {
    event.preventDefault();
    API.getProfilesByType(this.props.UserId, profileType)
      .then(response => {
        this.setState({ results: response.data })
      })
  }

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