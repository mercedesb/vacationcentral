import React from "react";
import "./BusinessListItem.css";
import { Grid, Row, Col } from 'react-bootstrap';

const BusinessListItem = props => (
  <li className="business-list-item">
    <Row>
      <Col xs={12}>
        <h3>{props.result.name}</h3>
        {props.result.confirmationNumber ? <div><p>Confirmation: {props.result.confirmationNumber}</p></div> : undefined}
      </Col>
    </Row>
    {props.result.address ? <div><p>Address:<br />{props.result.address}</p></div> : undefined}
    {props.result.phone ? <div><p>Phone:<br />{props.result.phone}</p></div> : undefined}
    {props.result.startDate ? <div><p>Check-in:<br />{props.result.startDate}</p></div> : undefined}
    {props.result.endDate ? <div><p>Check-in:<br />{props.result.endDate}</p></div> : undefined}
  </li>
);

export default BusinessListItem;