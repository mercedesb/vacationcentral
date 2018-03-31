import React from "react";
import "./ProfilePage.css";
import ProfileAdd from "./ProfileAdd";
import ProfileDisplay from "./ProfileDisplay";
import { Row, Col } from 'react-bootstrap';
// import { FormBtn, Input } from "../../Form";
// import { List, ListItem } from "../../List";
// import { Link } from "react-router-dom";
import API from "../../../utils/API";
// import ButtonSubmitForm from "../../ButtonSubmitForm";
// import DeleteBtn from "../../DeleteBtn";


class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileDisplayVisible: false, 
      profileAddVisible: true, 
      results: [],
      editing: false,
      editId: 0
    };
    this.getProfiles = this.getProfiles.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  handleToggleProfileDisplay = () => {
    console.log("profileDisplay is visible")
    this.getProfiles(this.props.UserId);
    this.setState({ profileDisplayVisible: !this.state.profileDisplayVisible })
  };

  handleToggleAddDisplay = () => {
    console.log("profileAdd is visible")
    this.setState({ profileAddVisible: !this.state.profileAddVisible })
  };

  toggleEdit = event => {
    // console.dir(event.target.id);
    this.setState({
      editing: !this.state.editing,
      editId: event.target.id
    }, () => console.log(this.state));
  };

  getProfiles = () => (
    API.getProfiles(this.props.UserId)
    .then(response => {
      this.setState({results: response.data})
    })
  );


  render() {
    console.log('these are my ProfilePage props!!', this.props)
    return (
      <Col xs={12} className="profile-page">

        <Row> <p className="header">Reward Programs</p> </Row>

        <Row>
          <button className='profile-btn' onClick={() =>
            {this.getProfiles()
              .then(this.handleToggleProfileDisplay)}}>
            View Your Profiles
          </button>
        </Row>
        <Row>
          <button className='profile-btn'  onClick={this.handleToggleAddDisplay}>Add a Rewards Profile</button>
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
          /> : null}
        </Row>

        <Row>
          <ProfileAdd
            show={this.state.profileAddVisible}
            getProfiles={this.getProfiles}
            UserId={this.props.UserId} />
        </Row>


      </Col>
    );
  }
}

export default ProfilePage;