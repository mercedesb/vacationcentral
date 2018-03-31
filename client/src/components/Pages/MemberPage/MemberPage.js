import React from "react";
import "./MemberPage.css";
import { Col } from 'react-bootstrap';

const MemberPage = props => (
  <Col xs={12} className="member-display">
    <p className="header">Welcome to Vacation Central, {props.user.firstName}!</p>

    <p className="second-text">One stop for all your vacation details</p>

    <p> Start by setting up a trip. All you will need is your destination and the dates of your adventure.</p>
  </Col>
);


export default MemberPage;