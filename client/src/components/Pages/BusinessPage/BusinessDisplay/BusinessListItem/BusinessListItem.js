import React from "react";
import "./BusinessListItem.css";
import { Grid, Row, Col } from 'react-bootstrap';
import { FormBtn } from "../../../../Form";
import BusinessForm from "../../BusinessForm";

const renderResult = props => (
  <li className="business-list-item">
    <Row>
        <p className="second-text">{props.result.name}</p>
        {props.result.confirmationNumber ? <div><p>Confirmation: <strong>{props.result.confirmationNumber}</strong></p></div> : undefined}
    </Row>
    {props.result.address ? <div><p>Address:  <strong>{props.result.address}</strong></p></div> : undefined}
    {props.result.phone ? <div><p>Phone:  <strong>{props.result.phone}</strong></p></div> : undefined}
    {props.result.startDate ? <div><p>Check-in:  <strong>{props.result.startDate}</strong></p></div> : undefined}
    {props.result.endDate ? <div><p>Check-in:  <strong>{props.result.endDate}</strong></p></div> : undefined}

    <Row>
        <button className="business-edit-btn" id={props.id} onClick={props.toggleEdit}>Edit</button>
      </Row>>
  </li>
);

const renderForm = props => (
  <Row>
    <BusinessForm
      toggleEdit={props.toggleEdit}
      editing={props.editing}
      id={props.result.id}
      businessData={props.result}
      getAllBusinesses={props.getAllBusinesses}
    />
  </Row>
);

const BusinessListItem = props => (
  <li className="business-list-item">
    {props.editId == props.id ? renderForm(props) : renderResult(props)}
  </li>
);

export default BusinessListItem;