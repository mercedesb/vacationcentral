import React from "react";
import "./ProfilePage.css";
import { Grid, Row, Col } from 'react-bootstrap';
import ProfileAdd from "./ProfileAdd";
import ProfileDisplay from "./ProfileDisplay";



class ProfilePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    render() {
      console.log('these are my ProfilePage props!!', this.props)
      return (
        <Col xs={12} className="profile-page">
          <h1>Profile Page</h1>
          <ProfileAdd />
          <ProfileDisplay />
        </Col>
      );
    }
  }
  
  export default ProfilePage;