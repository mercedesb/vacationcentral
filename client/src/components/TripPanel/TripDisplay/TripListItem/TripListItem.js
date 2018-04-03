import React from "react";
import "./TripListItem.css";
import { Row } from 'react-bootstrap';
import TripAdd from "../../TripAdd";

/**
 * Renders the trip details to the trip display div
 * @param {integer} props.result.id - database id of the specific trip
 * @param {integer} props.selectedRadioButton - if of the specific trip associated with the radio button
 * @param {function} handleRadioButtonSelect  - 
 * @param {string} props.result.destination - trip destination
 * @param {string} props.result.start - start date of the trip
 * @param {string} props.result.end -end date of the trip
 * @param {function} props.toggleEdit - monitors button click for edit request
 */
const renderResult = props => (
  <div className="trip-list-item">
    <Row>
      <input style={{ marginTop: "10%", marginLeft: "10%", height: "20px", width: "20px"}} 
        type="radio" 
        id={props.result.id}
        checked={props.selectedRadioButton === props.result.id}
        onClick={(event) => {props.handleRadioButtonSelect(props.result.id, props.result.destination)}} />
    </Row>
    
    <Row style={{ textAlign: "center"}}>
    {props.result.destination ? <div><p><strong>{props.result.destination}</strong></p></div> : undefined}
    {props.result.start ? <div><p>Start Date:<br /> <strong>{props.result.start}</strong></p></div> : undefined}
    {props.result.end ? <div><p>End Date: <br/> <strong>{props.result.end}</strong></p></div> : undefined}
    </Row>
    
    <Row>
      <button className="btn btn-lg trip-edit-btn" id={props.result.id} onClick={props.toggleEdit}>Edit</button>
    </Row>
  </div>
);

/**
 * Calls the Trip Add section when Edit button is clicked 
 */
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

/**
 * Ternary that monitors selected props.editId  vs. the props.id code to determine if a trip edit has been requested
 * @param {integer} props.editId - id of trip to be edited
 * @param {integer} props.id - id of the trip selected
 * @param {function} renderForm - if boolean true, calls TripAdd so the a form can be edited
 * @param {function} renderResult - renders trip information if boolean is false
 */
const TripListItem = props => (
  <li className="trip-list-item">
    {props.editId == props.id ? renderForm(props) : renderResult(props)}
  </li>
);

export default TripListItem;