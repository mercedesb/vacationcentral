import React from "react";
import "./FlightListItem.css";
import { Row } from 'react-bootstrap';
import FlightAdd from "../../FlightAdd";

/**
 * Renders the flight details to the flight display div
 * @param {string} confirmationNumber
 * @param {string} date
 * @param {string} airline
 * @param {string} flightNumber
 * @param {string} departureLocation
 * @param {string} departureTime
 * @param {string} arriveLocation
 * @param {string} arriveTime
 * @param {string} id - database generated id of the specific flight
 * @param {function} toggleEdit
 * @param {function} callFlightAware - passed the necessary arguments to for the Flight  Aware AJAX call
 * @param {function} deleteFlights - passes the flight id to the delete function
 */
const renderResult = props => (


  <div className="flight-listItem">
    <Row>
      <div><p className="second-text">Confirm Number:  <strong>{props.result.confirmationNumber}</strong></p></div>
      <div><p>Date:  <strong>{props.result.date}</strong></p></div>
      
      {props.result.airline ? <div><p>Airline:  {props.result.airline} </p> </div> : undefined}
      {props.result.flightNumber ? <div><p>Flight Number:  {props.result.flightNumber} </p> </div> : undefined}
 
      {props.result.departLocation ? <div><p>Departure Airport:  {props.result.departLocation} </p></div> : undefined}
      {props.result.departTime ? <div><p>Departure Time:  <strong>{props.result.departTime}</strong></p></div> : undefined}

      {props.result.arriveLocation ? <div><p>Airport:  {props.result.arriveLocation}</p></div> : undefined}
      {props.result.arriveTime ? <div><p>Arrival Time:  <strong>{props.result.arriveTime}</strong></p></div> : undefined}
    </Row>
    
    <Row>
      <button className="flight-edit-btn" id={props.result.id} onClick={props.toggleEdit}>Edit</button>
      <button className="flight-fa-btn" id={props.result.id} onClick={ e => props.callFlightAware(e, props.result.flightNumber, props.result.arriveLocation)}>Flight Status / Weather</button>
      <button className="flight-delete-btn" id={props.result.id} onClick={e => props.deleteFlights(e, props.result.id)}>Delete</button>

    </Row>
  </div>

);

/**
 * Calls FlightAdd section when Edit button is clicked 
 */
const renderForm = props => (
  <Row>
    <FlightAdd
      toggleEdit={props.toggleEdit}
      editing={props.editing}
      id={props.result.id}
      flightData={props.result}
      getFlights={props.getFlights}
      callFlightAware={props.callFlightAware}

    />
  </Row>
);

/**
 * Ternary that monitors selected props.editId vs. the props.id code to determine if a flight edit has been requested
 * @param {integer} props.id - id of the flight selected
 * @param {function} renderForm - if boolean true, calls FlightAdd so the a form can be edited
 * @param {function} renderResult - renders flight information if boolean is false
 */
const FlightListItem = props => (
  <li className="flight-list-item">
    {props.editId == props.id ? renderForm(props) : renderResult(props)}
  </li>
);

export default FlightListItem;