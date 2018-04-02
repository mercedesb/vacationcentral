import React from "react";
import "./PackingListItem.css";
import { Row } from 'react-bootstrap';
import PackingForm from "../../PackingForm";

const renderResult = props => (

  <div className="profile-list-item">
    <Row>
      <p className="second-text">{props.result.name}</p>
    </Row>
    {props.result.toPack ? <div><p style={{ textAlign: "left" }}><strong>Remember to Pack: </strong> {props.result.toPack}</p></div> : <p>missing</p>}
    {props.result.wishPack ? <div><p style={{ textAlign: "left" }}><strong>Wish I had packed: </strong>  {props.result.wishPack}</p></div> : <p>missing</p>}
    {props.result.noPack ? <div><p style={{ textAlign: "left" }}><strong>Leave at home: </strong> {props.result.noPack}</p></div> : <p>missing</p>}
    <Row>
      <button className="profile-edit-btn" id={props.result.id} onClick={props.toggleEdit}>Edit</button>
    </Row>
  </div>
);

const renderForm = props => (
  <Row>
    <PackingForm
      toggleEdit={props.toggleEdit}
      editing={props.editing}
      id={props.result.id}
      packingData={props.result}
      getPacking={props.getPacking}
    />
  </Row>
);

const PackingListItem = props => (
  <li className="packing-list-item">
    {props.editId == props.result.id ? renderForm(props) : renderResult(props)}
  </li>
);

export default PackingListItem;