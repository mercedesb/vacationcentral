import React from "react";
import "./List.css";
import { Grid, Row, Col } from 'react-bootstrap';

const List = props => (
  <Row>
      <Col xs={12} className="list">
          {props.category}
      </Col>
  </Row>
);

export default List;
