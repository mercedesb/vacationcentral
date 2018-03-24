import React from "react";
import "./ProfileAdd.css";
import { Grid, Row, Col } from 'react-bootstrap';
import {FormBtn, Input} from "../../../Form";

class ProfileAdd extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    render() {
      console.log('these are my profileadd props!!', this.props)
      return (
        <Col xs={12} className="profile-add">
          <p>Profile Add</p>
          <Row>
          <Input xs={6} placeholder="Add Company"/>
          <Input xs={6} placeholder="Add Rewards Number" />
          </Row>
          <Row>
          <Input xs={6} placeholder="Add Company URL" />
          <Input xs={6} placeholder="Add Company Phone" />
          </Row>
        </Col>
      );
    }
  }
  
  export default ProfileAdd;