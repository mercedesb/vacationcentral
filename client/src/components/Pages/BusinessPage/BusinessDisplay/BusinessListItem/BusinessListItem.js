import React from "react";
import "./BusinessListItem.css";
import { Grid, Row, Col } from 'react-bootstrap';
import { FormBtn } from "../../../../Form";
import BusinessForm from "../../BusinessForm";

const renderResult = props => (
  <div>
    <Row>
      <Col xs={6}>
        <h3>{props.result.name}</h3>
        {props.result.confirmationNumber ? <div><p>Confirmation: {props.result.confirmationNumber}</p></div> : undefined}
      </Col>
      <Col xs={6}>
        <FormBtn id={props.id} onClick={props.toggleEdit}>Edit</FormBtn>
      </Col>
    </Row>
    {props.result.address ? <div><p>Address:<br />{props.result.address}</p></div> : undefined}
    {props.result.phone ? <div><p>Phone:<br />{props.result.phone}</p></div> : undefined}
    {props.result.startDate ? <div><p>Check-in:<br />{props.result.startDate}</p></div> : undefined}
    {props.result.endDate ? <div><p>Check-in:<br />{props.result.endDate}</p></div> : undefined}
  </div>
);

const renderForm = props => (
  <Row>
    <BusinessForm
      toggleEdit={props.toggleEdit}
      editing={props.editing}
      id={props.id}
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