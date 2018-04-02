import React from "react";
import "./FlightListItem.css";
import { Row } from 'react-bootstrap';
import FlightAdd from "../../FlightAdd";


const renderResult = props => (


  <div className="flight-listItem">
    <Row>
      <div><p className="second-text">Confirm Number:  <strong>{props.result.confirmationNumber}</strong></p></div>
      <div><p>Date:  <strong>{props.result.date}</strong></p></div>
      
      {props.result.airline ? <div><p>Airline:  {props.result.airline} </p> </div> : undefined}
      {props.result.flightNumber ? <div><p>Airline:  {props.result.flightNumber} </p> </div> : undefined}
 
      {props.result.departLocation ? <div><p>Departure Airport:  {props.result.departLocation} </p></div> : undefined}
      {props.result.departTime ? <div><p>Departure Time:  <strong>{props.result.departTime}</strong></p></div> : undefined}

      {props.result.arriveLocation ? <div><p>Airport:  {props.result.arriveLocation}</p></div> : undefined}
      {props.result.arriveTime ? <div><p>Arrival Time:  <strong>{props.result.arriveTime}</strong></p></div> : undefined}
    </Row>
    
    <Row>
      <button className="flight-edit-btn" id={props.result.id} onClick={props.toggleEdit}>Edit</button>
      <button className="flight-fa-btn" id={props.result.id} onClick={ e => props.callFlightAware(e, props.result.flightNumber, props.result.arriveLocation)}>Call Flight Aware</button>
      <button className="flight-delete-btn" id={props.result.id} onClick={e => props.deleteFlights(e, props.result.id)}>Delete</button>

    </Row>
  </div>

);

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

const FlightListItem = props => (
  <li className="flight-list-item">
    {props.editId == props.id ? renderForm(props) : renderResult(props)}
  </li>
);

export default FlightListItem;