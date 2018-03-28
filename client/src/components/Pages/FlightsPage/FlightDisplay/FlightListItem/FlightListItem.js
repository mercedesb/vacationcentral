import React from "react";
import "./FlightListItem.css";
import { Grid, Row, Col } from 'react-bootstrap';
import { FormBtn } from "../../../../Form";
import FlightAdd from "../../FlightAdd";
import { Link } from "react-router-dom";

const renderResult = props => (


  <form className="flight-listItem">
    <Row>
      <div><p className="second-text">Confirm Number:  <strong>{props.result.confirmationNumber}</strong></p></div>

      {props.result.flightNumber ? <div><p>Airline:  {props.result.airline} </p> </div> : undefined}
 
      {props.result.departLocation ? <div><p>Departure Airport:  {props.result.departLocation} </p></div> : undefined}
      {props.result.departTime ? <div><p>Departure Time:  <strong>{props.result.departTime}</strong></p></div> : undefined}

      {props.result.arriveLocation ? <div><p>Airport:  {props.result.arriveLocation}</p></div> : undefined}
      {props.result.arriveTime ? <div><p>Arrival Time:  <strong>{props.result.arriveTime}</strong></p></div> : undefined}
    </Row>
    <Row>
      <button className="flight-edit-btn"><Link to={"https://www.world-airport-codes.com/"} target="_blank">Search Airport Codes</Link></button>

      <button className="flight-edit-btn" id={props.result.id} onClick={props.toggleEdit}>Edit</button>

      <button className="flight-edit-btn">FlightAware</button>

    </Row>
  </form>

);

const renderForm = props => (
  <Row>
    <FlightAdd
      toggleEdit={props.toggleEdit}
      editing={props.editing}
      id={props.result.id}
      flightData={props.result}
      getFlights={props.getFlights}
    />
  </Row>
);

const FlightListItem = props => (
  <li className="flight-list-item">
    {props.editId == props.id ? renderForm(props) : renderResult(props)}
  </li>
);

export default FlightListItem;