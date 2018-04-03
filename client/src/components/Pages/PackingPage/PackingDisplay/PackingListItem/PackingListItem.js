import React from "react";
import "./PackingListItem.css";
import { Row } from 'react-bootstrap';
import PackingForm from "../../PackingForm";

/**
 * Renders the packing details to the packing display div
 * @param {integer} props.result.name - name of the trip
 * @param {integer} props.result.id - database id of the packing list
 * @param {text} props.result.toPack
 * @param {text} props.result.wishPack
 * @param {text} props.result.noPack
 * @param {function} props.toggleEdit - monitors button click for edit request
 */
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

/**
 * Calls the PackingForm section when Edit button is clicked 
 */
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

/**
 * Ternary that monitors selected props.editId  vs. the props.id code to determine if an edit to packing has been requested
 * @param {integer} props.editId - id of packing item to be edited
 * @param {integer} props.id - id of the packing item selected
 * @param {function} renderForm - if boolean true, calls PackingForm so the a form can be edited
 * @param {function} renderResult - renders the packing information if boolean is false
 */
const PackingListItem = props => (
  <li className="packing-list-item">
    {props.editId == props.result.id ? renderForm(props) : renderResult(props)}
  </li>
);

export default PackingListItem;