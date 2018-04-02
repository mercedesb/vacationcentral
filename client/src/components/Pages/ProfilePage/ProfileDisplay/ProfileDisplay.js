import React from "react";
import "./ProfileDisplay.css";
import ProfileListItem from "././ProfileListItem";
import { Col, Row } from 'react-bootstrap';


class ProfileDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    if (!this.props.show) { return null; }

    const sortedCompany = this.props.results.sort((a, b) => (a.company) > (b.company));

    return (
      <Col xs={12} className="profile-display">
        <Row>
          <button className="profile-type-btn" onClick={() => this.props.getProfiles()}>All Profiles</button>
          <button className="profile-type-btn" onClick={(e) => this.props.getProfilesByType(e, "Airline")}>Airline</button>
          <button className="profile-type-btn" onClick={(e) => this.props.getProfilesByType(e, "RentalCar")}>Rental Car</button>
          <button className="profile-type-btn" onClick={(e) => this.props.getProfilesByType(e, "Hotel")}>Hotel</button>
          </Row>
          
          <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>

            {this.props.results.length !== 0 ?
                this.props.results.map(profile => 
                <ProfileListItem
                  editing={this.props.editing}
                  editId={this.props.editId}
                  getProfiles={this.props.getProfiles}
                  deleteProfiles={this.props.deleteProfiles}
                  getProfilesByType={this.getProfilesByType}
                  id={profile.id}
                  key={profile.id}
                  result={profile}
                  toggleEdit={this.props.toggleEdit}
                />) : null}          

          </ul>
        </Col>
      );
    };
  };

export default ProfileDisplay;