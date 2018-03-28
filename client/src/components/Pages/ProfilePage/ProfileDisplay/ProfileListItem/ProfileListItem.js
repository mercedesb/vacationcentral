import React from "react";
import "./ProfileListItem.css";
import { Grid, Row, Col } from 'react-bootstrap';
import { FormBtn } from "../../../../Form";
import ProfileAdd from "../../ProfileAdd";

const renderResult = props => (

  <li className="profile-list-item">
    <Row>
        <p className="second-text">{props.result.company}</p>
    </Row>
    {props.result.memberNumber ? <div><p>Member Number:  <strong> {props.result.memberNumber}</strong></p></div> : undefined}
    {props.result.phone ? <div><p>Phone:  <strong>{props.result.phone}</strong></p></div> : undefined}
    
    <Row>
        <button className="profileedit-btn" id={props.result.id} onClick={props.toggleEdit}>Edit</button>
    </Row>
  
  
  </li>



);

const renderForm = props => (
  <Row>
    <ProfileAdd
      toggleEdit={props.toggleEdit}
      editing={props.editing}
      id={props.result.id}
      profileData={props.result}
      getProfiles={props.getProfiles}
    />
  </Row>
);

const ProfileListItem = props => (
  <li className="profile-list-item">
    {props.editId == props.id ? renderForm(props) : renderResult(props)}
  </li>
);

export default ProfileListItem;