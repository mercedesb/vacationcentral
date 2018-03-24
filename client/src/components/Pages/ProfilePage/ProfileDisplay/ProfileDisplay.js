import React from "react";
import "./ProfileDisplay.css";
import { Grid, Row, Col } from 'react-bootstrap';

class ProfileDisplay extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    render() {
      console.log('these are my profiledisplay props!!', this.props)
      return (
        <Col xs={12} className="profile-display">
          <p>ProfileDisplay</p>
        </Col>
      );
    }
  }
  
  export default ProfileDisplay;