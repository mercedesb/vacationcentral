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
          <select className="form-control" placeholder="Choose a Company Type">
            <option profiletype="Airline">Airline</option>
            <option profiletype="Hotel">Hotel</option>
            <option profiletype="RentalCar">Rental Car</option>
          </select>
          <Input placeholder="Add Company Name"/>
          <Input placeholder="Add Rewards Number" />
          <Input placeholder="Add Company URL" />
          <Input placeholder="Add Company Phone" />
       
        </Col>
      );
    }
  }
  
  export default ProfileAdd;