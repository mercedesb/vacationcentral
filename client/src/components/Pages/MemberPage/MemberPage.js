import React from "react";
import "./MemberPage.css";
import { Col } from 'react-bootstrap';

const MemberPage = props => (
  <Col xs={12} className="member-display">
    <p className="header">Welcome to Vacation Central, {props.user.firstName}!</p>

    <p className="second-text">One stop for all your vacation details.</p>
    <br/>
    {props.tripDestination ? <div><p className="second-text">Your Destination: <strong>{props.tripDestination}</strong></p> </div> :
         <div><p>It all starts with a trip. All you will need is your destination and the dates of your adventure.</p></div>}
    <br/>
  </Col>
);


export default MemberPage;