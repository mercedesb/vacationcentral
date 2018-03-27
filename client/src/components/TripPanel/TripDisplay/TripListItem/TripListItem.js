import React from "react";
import "./TripListItem.css";
import { Grid, Row, Col } from 'react-bootstrap';
import { FormBtn } from "../../../Form";
import TripAdd from "../../TripAdd";


const renderResult = props => (

  <div>
    <Row>
      <Col xs={6}>
        <h3>{props.result.destination}</h3>
      </Col>
      <Col xs={6}>
        <FormBtn id={props.result.id} onClick={props.toggleEdit}>Edit</FormBtn>
      </Col>
    </Row>
    {props.result.start ? <div><p>Start Date:<br />{props.result.start}</p></div> : undefined}
    {props.result.end ? <div><p>End Date:<br />{props.result.end}</p></div> : undefined}
  </div>
);

const renderForm = props => (
  <Row>
    <TripAdd
      toggleEdit={props.toggleEdit}
      editing={props.editing}
      id={props.result.id}
      tripData={props.result}
      getTrips={props.getTrips}
    />
  </Row>
);

const TripListItem = props => (
  <li className="trip-list-item">
    {props.editId == props.id ? renderForm(props) : renderResult(props)}
  </li>
);

export default TripListItem;