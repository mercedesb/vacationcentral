import React from "react";
import "./TripListItem.css";
import { Grid, Row, Col } from 'react-bootstrap';
import { FormBtn } from "../../../Form";
import TripAdd from "../../TripAdd";


const renderResult = props => (

  <div>
    <Row>
      <Col xs={1}>
      <input className="trip-check" type="checkbox" onClick={(event) => {
        console.dir(event.target);
        props.handleSetTripId(props.result.id)}} /> 
      </Col>
    </Row>
    
    <Row>
        <p style={{ fontSize: "20px" }}>{props.result.destination}</p>
    </Row>
    
    <Row style={{ textAlign: "center"}}>
    {props.result.start ? <div><p>Start Date:<br />{props.result.start}</p></div> : undefined}
    {props.result.end ? <div><p>End Date:<br />{props.result.end}</p></div> : undefined}
    </Row>
    
    <Row>
      <FormBtn style={{float: "left" }}id={props.result.id} onClick={props.toggleEdit}>Edit</FormBtn>
    </Row>
        <br/>
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