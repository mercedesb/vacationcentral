import React from "react";
import "./ProfilePage.css";
import { Grid, Row, Col, Div } from 'react-bootstrap';
import {Input} from "../../Form";
import { List, ListItem } from "../../List";
import { Link } from "react-router-dom";
import API from "../../../utils/API";
import ButtonSubmitForm from "../../ButtonSubmitForm";
import DeleteBtn from "../../DeleteBtn";


class ProfilePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user:  "",
        type: "",
        company: "", 
        memberNumber: "",
        phone: "", 
        profileArray: []
      }
    }

    loadProfile = user => {
      API.getProfile(user)
        .then(res =>
          this.setState({profile: res.data, type: "", company: "", memberNumber: "" , phone: ""})
        )
        .catch(err => console.log(err));
    };

    handleProfileInputChange = event => {
      const {name, value} = event.target;
      this.setState({
        [name]: value
      });
      console.log("profile info", this.state.type, this.state.company, this.state.memberNumber, this.state.phone);
      console.log("state", this.state);
    };

    handleProfileFormSubmit = (event) => {
      event.preventDefault();
        console.log("incoming state", this.props.user, this.state);
        if (this.state.type && this.state.company && this.memberNumber) {
          API.saveProfile({
            UserId: this.props.user,
            company: this.state.company,
            memberNumber: this.state.memberNumber,
            phone: this.state.phone
          })
            // .then(res => loadTrips(user))
            .catch(err => console.log(err));
        } else { alert("Missing fields")};
    };
    

    render() {
      console.log('these are my ProfilePage props!!', this.props)
      return (
        <Col xs={12} className="profile-page">
          <p>Profile Page</p>

          <p>Profile Add</p>
 
          {/* <select value={this.state.type}
                  name="type"
                  OnChange={this.handleProfileInputChange}
                  type="text"
                  placeholder="Select a Category Type"> */}
            <select>

            <option> </option>
            <option type="Airline">Airline</option>
            <option type="Hotel">Hotel</option>
            <option type="RentalCar">Rental Car</option>

            </select>
           
          
          <Input
              value={this.state.company}
              name="company"
              onChange={this.handleProfileInputChange}
              type="text"
              placeholder="Add Company Name"/>
          <Input
              value={this.state.memberNumber}
              name="memberNumber"
              onChange={this.handleProfileInputChange}
              type="text"
              placeholder="Add Rewards Number" />
          <Input 
              value={this.state.phone}
              name="phone"
              onChange={this.handleProfileInputChange}
              type="text"
              placeholder="Add Company Phone" />

          <ButtonSubmitForm onClick={() => this.handleProfileFormSubmit()} />

          <p> Profile Display </p>

          <p> This is where user profiles will display </p>
          
          {/* {this.profileArray.map(profile => 
                  <Grid className="profileDisplay">
                      <p>Company: {profile.company}</p> 
                      <p>Reward Number: {profile.memberNumber}</p>
                      <p>Phone Number: {profile.phoneNumber}</p>
                      <DeleteBtn onClick={() => this.deleteProfile(profile.id)} /> 
                  </Grid>
                )} */}
        
        </Col>
      );
    }
  }
  
  export default ProfilePage;