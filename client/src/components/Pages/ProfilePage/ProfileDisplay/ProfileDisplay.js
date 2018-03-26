import React from "react";
import "./ProfileDisplay.css";
import { Grid, Row, Col, Div } from 'react-bootstrap';
import {FormBtn, Input, TextArea} from "../../../Form";
import { Link } from "react-router-dom";
import API from "../../../../utils/API";


class ProfileDisplay extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        results: [],
        profileData: {}
      };
    }
    
componentDidMount() {
     this.loadProfiles(this.props.UserId);
    }


loadProfiles = (UserId) => {
      API.getProfiles(UserId)
        .then(response =>
          this.setState({ results: response.data }, () => console.log(this.state))
        )
        .catch(err => console.log(err));
    };


    render() {

        if(!this.props.show){ return null; }
      
        console.log('these are my profile display props!!', this.props)
      
        return (
     
            <form className="profile-display">
              <p>Your Profiles</p>



                  {/* <Grid className="tripDisplay">
                        <FormBtn>Edit</FormBtn>
                      <input className="tag" type="checkbox" id={this.tripData.id} onChange/>
                      <p>Destination: {tripData.destination}</p> 
                      <p>To: {tripData.start} From: {trip.end}</p>
                      <DeleteBtn onClick={() => this.deleteTrips(tripData.id)} /> 
                  </Grid> */}


            </form>
      );
    }
  }

  export default ProfileDisplay;