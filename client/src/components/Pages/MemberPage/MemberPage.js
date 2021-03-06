import React from "react";
import "./MemberPage.css";
import { Col } from 'react-bootstrap';

/**
 * Displays information of registered user
 * @param {string} firstName
 * @param {string} tripDestination - updates trip once chosen
 */
const MemberPage = props => (
  <Col xs={12} className="member-display">
    <p className="header">Welcome to Vacationist, {props.user.firstName}!</p>
    <p className="second-text">All your vacation details in one location.</p>
    <br/>
    {props.tripDestination ? <div><p className="second-text">Your Destination: <strong>{props.tripDestination}</strong></p> </div> :
         <div><p>It starts with a trip. All you need is your destination and the dates of your adventure.</p></div>}
    <br/>
  </Col>
);


export default MemberPage;