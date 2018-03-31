import React from "react";
import "./TripListItem.css";
import { Row } from 'react-bootstrap';
import TripAdd from "../../TripAdd";


const renderResult = props => (
  <div className="trip-list-item">
    <Row>
      <input style={{ marginTop: "10%", marginLeft: "10%", height: "20px", width: "20px"}} 
        type="radio" 
        id={props.result.id}
        checked={props.selectedRadioButton === props.result.id}
        onClick={(event) => {props.handleRadioButtonSelect(props.result.id)}} />
    </Row>
    
    <Row style={{ textAlign: "center"}}>
    {props.result.start ? <div><p><strong>{props.result.destination}</strong></p></div> : undefined}
    {props.result.start ? <div><p>Start Date:<br /> <strong>{props.result.start}</strong></p></div> : undefined}
    {props.result.end ? <div><p>End Date: <br/> <strong>{props.result.end}</strong></p></div> : undefined}
    </Row>
    
    <Row>
      <button className="btn btn-lg trip-edit-btn" id={props.result.id} onClick={props.toggleEdit}>Edit</button>
    </Row>
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