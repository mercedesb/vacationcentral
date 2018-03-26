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
      profileAddVisible: true,
      profileDisplayVisible: false

    };
  }


  handleToggleProfileAdd = () => {
    console.log("profileAdd is visible")
    this.setState({ profileAddVisible: !this.state.profileAddVisible })
  };

  handleToggleProfileDisplay = () => {
    console.log("profileDisplay is visible")
    this.setState({ profileDisplayVisible: !this.state.profileDisplayVisible })
  };







  render() {
    console.log('these are my ProfilePage props!!', this.props)
    return (
      <Col xs={12} className="profile-page">

        <Row>
          <ProfileAdd show={this.state.profileAddVisible} UserId={this.props.userId} />
        </Row>

        <Row>
          <FormBtn className='profile-btn' onClick={this.handleToggleProfileDisplay}>View Your Profiless</FormBtn>
        </Row>

        <Row>
          {this.state.profileDisplayVisible ? <ProfileDisplay show={this.state.profileDisplayVisible} UserId={this.props.userId} /> : null}
        </Row>


      </Col>
    );
  }
}

export default ProfilePage;