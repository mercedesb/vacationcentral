import React from "react";
import "./ProfileDisplay.css";
import ProfileListItem from "././ProfileListItem";
import { Grid, Row, Col, Div } from 'react-bootstrap';
import {FormBtn, Input, TextArea} from "../../../Form";


class ProfileDisplay extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }

    render() {

      if(!this.props.show){ return null; }
      console.log('these are my profile display props!!', this.props)
      
      return (
     
        <Col xs={12} className="profile-display">
              <h1>Your Profiles</h1>
          <ul>

            {this.props.results.length !== 0 ?
                this.props.results.map(profile => 
                <ProfileListItem
                  editing={this.props.editing}
                  editId={this.props.editId}
                  getProfiles={this.props.getProfiles}
                  id={profile.id}
                  key={profile.id}
                  result={profile}
                  toggleEdit={this.props.toggleEdit}
                />) :
            <h3> Add a profile to start</h3>}          

            </ul>
          </Col>
      );
    }
  }

  export default ProfileDisplay;