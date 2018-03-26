import React from "react";
import "./ProfilePage.css";
import { Grid, Row, Col, Div } from 'react-bootstrap';
import {FormBtn, Input} from "../../Form";
import { List, ListItem } from "../../List";
import { Link } from "react-router-dom";
import API from "../../../utils/API";
import ButtonSubmitForm from "../../ButtonSubmitForm";
import DeleteBtn from "../../DeleteBtn";


class ProfilePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          res: [],
          profileData: {}
      };
    }

    loadProfile = user => {
      API.getProfile(this.props.UserId)
        .then(res =>
          this.setState({profile: res.data, type: "", company: "", memberNumber: "" , phone: ""})
        )
        .catch(err => console.log(err));
    };

    handleProfileInputChange = event => {
      const {name, value} = event.target;
      this.setState(prevState => (
       { profileData: {
         ...prevState.profileData,
         UserId: this.props.UserId,
        [name]: value
      }
       }), () =>
      console.log("profile info", this.state.profileData));
    };

    handleProfileFormSubmit = (event) => {
      console.log("incoming  profile state", this.state.profileData);
      event.preventDefault();
          API.saveProfile(this.state.profileData)
              .then(res => this.setState({res: [res.data], profileData: {}}))
              .then(() => console.log(this.state))
              .catch(err => console.log("error profile", err));
        } 
    

    render() {
      console.log('these are my ProfilePage props!!', this.props)
      return (
        <Col xs={12} className="profile-page">

          <p>Add a Company to your Profile</p>
          <form>
           
            <form>
            <label>Select the Profile Type: </label>
            <select xs={12} value={this.state.type} name="type" onChange={this.handleProfileInputChange}>
            <option value="Airline">Airline</option>
            <option value="Hotel">Hotel</option>
            <option value="RentalCar">Rental Car</option>
            </select>
            </form>
          
          <label>Company Name:</label> 
          <Input xs={4}
              value={this.state.company}
              name="company"
              onChange={this.handleProfileInputChange}
              type="text"
              placeholder="Add Company Name"/>
          
          <label>Reward Number:</label> 
          <Input xs={4}
              value={this.state.memberNumber}
              name="memberNumber"
              onChange={this.handleProfileInputChange}
              type="text"
              placeholder="Add Rewards Number" />

          <label>Company Phone Number:</label> 
          <Input xs={4}
              value={this.state.phone}
              name="phone"
              onChange={this.handleProfileInputChange}
              type="text"
              placeholder="Add Company Phone" />

          <FormBtn onClick={this.handleProfileFormSubmit} >Submit</FormBtn>
          
          </form>

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