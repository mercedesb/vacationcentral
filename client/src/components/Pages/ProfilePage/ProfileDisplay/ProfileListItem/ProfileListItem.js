import React from "react";
import "./ProfileListItem.css";
import { Grid, Row, Col } from 'react-bootstrap';
import { FormBtn } from "../../../../Form";
import ProfileAdd from "../../ProfileAdd";

const renderResult = props => (

  <div>
    <Row>
      <Col xs={6}>
        <h3>{props.result.company}</h3>
      </Col>
      <Col xs={6}>
        <FormBtn id={props.result.id} onClick={props.toggleEdit}>Edit</FormBtn>
      </Col>
    </Row>
    {props.result.memberNumber ? <div><p>Member Number:<br />{props.result.memberNumber}</p></div> : undefined}
    {props.result.phone ? <div><p>Phone:<br />{props.result.phone}</p></div> : undefined}
  </div>
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