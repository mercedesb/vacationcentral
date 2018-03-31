import React, { Component } from "react";
import "./ProfileAdd.css";
// import { Grid, Row, Col, Div } from 'react-bootstrap';
import { Input } from "../../../Form";
import API from "../../../../utils/API";

class ProfileAdd extends Component {
    constructor(props) {
      super(props);
      this.state = {
        profileData: {},
        editData: {}
      };
    }


    componentDidMount() {
      if(this.props.profileData) {
        this.setState({profileData: this.props.profileData});
      }
    }

    handleProfileInputChange = event => {
      const {name, value} = event.target;
      this.setState(prevState => (
       { profileData: {
         ...prevState.profileData,
         UserId: this.props.UserId,
        [name]: value
      }, 
        editData: {
          ...prevState.editData,
          id: this.state.profileData.id,
          [name]: value
        }
       }), () =>
      console.log("profile info", this.state.profileData));
    };


    handleProfileFormSubmit = event => {
      console.log("incoming profile state", this.state.profileData);
      event.preventDefault();
          API.saveProfiles(this.state.profileData)
            .then(response => {
              this.setState({profileData: {}});
              this.props.getProfiles(this.props.UserId);
            })
            .catch(err => console.log("error profile form submit", err));
    }

    handleProfileEdit = event => {
      console.log("handle profile edit", this.state.editData)
      event.preventDefault();
      this.props.toggleEdit(event);
      API.updateProfiles(this.state.editData, this.state.profileData.id)
        .then(response =>{
          console.log(response.data);
          this.setState({profileData: {}, editData: {}});
          this.props.getProfiles(this.props.UserId);
        })
          .catch(err => console.log("profile update error", err));
    }
    
    render() {
        

        console.log('these are my profile add props!!', this.props)

       return (
        <div className="profile-add">

           <p className="prof-add-text">Add a company to your rewards profile</p>

             <form >
               <label className="profile-select-text">Select the Profile Type: </label>
               <select xs={12} value={this.state.profileData.type} name="type" onChange={this.handleProfileInputChange}>
                 <option value="Airline">Airline</option>
                 <option value="Hotel">Hotel</option>
                 <option value="RentalCar">Rental Car</option>
               </select>
             </form>

             <label className="label-text">Company Name:</label>
             <Input style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
               value={this.state.profileData.company || ""}
               name="company"
               onChange={this.handleProfileInputChange}
               type="text"
               placeholder="Add Company Name" />

             <label className="label-text">Reward Number:</label>
             <Input style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
               value={this.state.profileData.memberNumber || ""}
               name="memberNumber"
               onChange={this.handleProfileInputChange}
               type="text"
               placeholder="Add Rewards Number" />

             <label className="label-text">Company Phone Number:</label>
             <Input style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
               value={this.state.profileData.phone  || ""}
               name="phone"
               onChange={this.handleProfileInputChange}
               type="text"
               placeholder="Add Company Phone" />

             <button className="btn btn-lrg submit-btn"  onClick={this.props.editing ? this.handleProfileEdit : this.handleProfileFormSubmit} >Submit</button>
          

        </div>
      );
    }
  }
  
  export default ProfileAdd;