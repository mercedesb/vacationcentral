import React from "react";
import "./ProfileDisplay.css";
import ProfileListItem from "././ProfileListItem";
import { Col } from 'react-bootstrap';


class ProfileDisplay extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render() {

      if(!this.props.show){ return null; }
      console.log('these are my profile display props!!', this.props)

      const sortedCompany = this.props.results.sort((a, b) => (a.company) > (b.company));
      console.log("this results array post-sort", this.props.results);
     
      return (
        <Col xs={12} className="profile-display">
 
          <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>

            {this.props.results.length !== 0 ?
                this.props.results.map(profile => 
                <ProfileListItem
                  editing={this.props.editing}
                  editId={this.props.editId}
                  getProfiles={this.props.getProfiles}
                  deleteProfiles={this.props.deleteProfiles}
                  id={profile.id}
                  key={profile.id}
                  result={profile}
                  toggleEdit={this.props.toggleEdit}
                />) :
            <p className="second-text"> Add a profile to start</p>}          

          </ul>
        </Col>
      );
    };
  };

  export default ProfileDisplay;