import React from "react";
import "./TripListItem.css";
import { Grid, Row, Col } from 'react-bootstrap';
import { FormBtn } from "../../../Form";
import TripAdd from "../../TripAdd";


const renderResult = props => (

  <li>
    <Row>
      <input style={{ marginTop: "15px", marginLeft: "30px", height: "30px", width: "30px"}} type="checkbox" value="clicked" onClick={(event) => {
        console.dir(event.target);
        props.handleClickBox(props.clicked);
        props.handleSetTripId(props.result.id)}} /> 
        <p style={{ fontSize: "20px" }}>{props.result.destination}</p>
    </Row>
    
    <Row style={{ textAlign: "center"}}>
    {props.result.start ? <div><p>Start Date:<br />{props.result.start}</p></div> : undefined}
    {props.result.end ? <div><p>End Date:<br />{props.result.end}</p></div> : undefined}
    </Row>
    
    <Row>
      <button className="btn btn-lg tripedit-btn" id={props.result.id} onClick={props.toggleEdit}>Edit</button>
    </Row>
  </li>

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