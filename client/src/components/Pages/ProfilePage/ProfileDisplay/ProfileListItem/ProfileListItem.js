import React from "react";
import "./ProfileListItem.css";
import { Row } from 'react-bootstrap';
import ProfileAdd from "../../ProfileAdd";

/**
 * Renders the profile rewards details to the profile display div
 * @param {integer} props.result.company - company name of specific profile
 * @param {string} props.result.memberNumber
 * @param {string} props.result.phone
 * @param {function} props.toggleEdit - monitors button click for edit request
 * @param {function} deleteProfiles - on button click passed id to delete API call
 */
const renderResult = props => (

  <div className="profile-list-item">
    <Row>
      <p className="second-text">{props.result.company}</p>
    </Row>
    {props.result.memberNumber ? <div><p>Member Number:  <strong> {props.result.memberNumber}</strong></p></div> : null}
    {props.result.phone ? <div><p>Phone:  <strong>{props.result.phone}</strong></p></div> : null}
    {props.result.url ? <div><p>Website:  <strong>{props.result.url}</strong></p></div> : null}    
    <Row>
      <button className="profile-edit-btn" id={props.result.id} onClick={props.toggleEdit}>Edit</button>
      <button className="profile-delete-btn" id={props.result.id} onClick={() => props.deleteProfiles(props.result.id)}>Delete</button>
    </Row>
  </div>
);

/**
 * Calls Profile Add section when Edit button is clicked 
 */
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

/**
 * Ternary that monitors selected props.editId  vs. the props.id code to determine if a profile edit has been requested
 * @param {integer} props.editId - id of profile to be edited
 * @param {integer} props.id - id of the profile selected
 * @param {function} renderForm - if boolean true, calls ProfileAdd so the a form can be edited
 * @param {function} renderResult - renders profile information if boolean is false
 */
const ProfileListItem = props => (
  <li className="profile-list-item">
    {props.editId == props.id ? renderForm(props) : renderResult(props)}
  </li>
);

export default ProfileListItem;