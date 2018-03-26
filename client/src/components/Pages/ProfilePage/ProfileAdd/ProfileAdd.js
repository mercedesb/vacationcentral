import React from "react";
import "./ProfileAdd.css";
import { Grid, Row, Col, Div } from 'react-bootstrap';
import {FormBtn, Input, TextArea} from "../../../Form";
import API from "../../../../utils/API";

class ProfileAdd extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        results: [],
        profileData: {}
      };
    }

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


    handleProfileFormSubmit = event => {
      console.log("incoming profile state", this.state.profileData);
      event.preventDefault();
          API.saveProfiles(this.state.profileData)
            .then(response => this.setState({ results: [response.data], profileData: {}}))
            .then(() => console.log("profile state back", this.state))
            .catch(err => console.log("error Profile  Form Submit", err));
    };
    
    render() {
        console.log('these are my profile add props!!', this.props)
        

       return (
        <div>

           <p>Add a Company to your Profile</p>

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
               placeholder="Add Company Name" />

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
          

        </div>
      );
    }
  }
  
  export default ProfileAdd;