import React from "react";
import "./ProfilePage.css";
import ProfileAdd from "./ProfileAdd";
import ProfileDisplay from "./ProfileDisplay";
import { Grid, Row, Col, Div } from 'react-bootstrap';
import { FormBtn, Input } from "../../Form";
import { List, ListItem } from "../../List";
import { Link } from "react-router-dom";
import API from "../../../utils/API";
import ButtonSubmitForm from "../../ButtonSubmitForm";
import DeleteBtn from "../../DeleteBtn";


class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileDisplayVisible: false, 
      results: [],
      editing: false,
      editId: 0
    };
    this.getProfiles = this.getProfiles.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentWillMount(){
    this.getProfiles();
  }

  handleToggleProfileDisplay = () => {
    console.log("profileDisplay is visible")
    this.setState({ profileDisplayVisible: !this.state.profileDisplayVisible })
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
      this.setState({results: response.data}, () => console.log("getProfiles working", this.state))
    })
  );


  render() {
    console.log('these are my ProfilePage props!!', this.props)
    return (
      <Col xs={12} className="profile-page">

        <Row> <p className="header">Reward Programs</p> </Row>

        <Row>
          <ProfileAdd 
              getProfiles={this.getProfiles}
              UserId={this.props.UserId} />
        </Row>

        <Row>
          <button className='profile-btn' onClick={this.handleToggleProfileDisplay}>View Your Profiles</button>
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


      </Col>
    );
  }
}

export default ProfilePage;