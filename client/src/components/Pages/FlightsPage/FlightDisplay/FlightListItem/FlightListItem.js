import React from "react";
import "./FlightListItem.css";
import { Grid, Row, Col } from 'react-bootstrap';
import { FormBtn } from "../../../../Form";
import FlightAdd from "../../FlightAdd";
import { Link } from "react-router-dom";

const renderResult = props => (

  <div>
    <Row>
      <Col xs={6}>
        <h3>{props.result.airline}</h3>
        <h2>{props.result.confirmationNumber}</h2>
      </Col>
      <Col xs={6}>
        <FormBtn id={props.result.id} onClick={props.toggleEdit}>Edit</FormBtn>
      </Col>
    </Row>
    {props.result.flightNumber ? <div><p>Flight Number:<br />{props.result.flightNumber}</p></div> : undefined}
    {props.result.departLocation ? <div><p>Departure Airport:<br />{props.result.departLocation}</p></div> : undefined}
    {props.result.departTime ? <div><p>Departure Time:<br />{props.result.departTime}</p></div> : undefined}
    {props.result.arriveLocation ? <div><p>Arrival Airport:<br />{props.result.arriveLocation}</p></div> : undefined}
    {props.result.arriveTime? <div><p>Arrival Time:<br />{props.result.arriveTime}</p></div> : undefined}
    <Link to={"https://www.world-airport-codes.com/"} target="_blank">Search Airport Codes</Link>



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
    />
  </Row>
);

const FlightListItem = props => (
  <li className="flight-list-item">
    {props.editId == props.id ? renderForm(props) : renderResult(props)}
  </li>
);

export default FlightListItem;