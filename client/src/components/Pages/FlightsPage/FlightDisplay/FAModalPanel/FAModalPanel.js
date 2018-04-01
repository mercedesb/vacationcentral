import React from "react";
import "./FAModalPanel.css";
// import { Grid, Row, Col } from 'react-bootstrap';
// import {FormBtn, Input, TextArea} from "../../../../Form";
import API from "../../../../../utils/API"



class FAModalPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }


    render() {

      if(!this.props.visible) {return null;}

      console.log('these are my modal props!!', this.props)
    return (

      <div className="modal-panel">
        <label className="label-text" >Flight Aware Status</label>
        <div className="fa-status-panel">

            <p>Flight  <strong>{this.props.departFlight}</strong>  is expected to depart on <strong>{this.props.departTime}.</strong></p>
            <p>And the temperature at  <strong>{this.props.arriveLocation}</strong>  is  <strong>{this.props.arriveTemp}</strong>  with  <strong>{this.props.arriveClouds}</strong>.</p>
        </div>


        <div className="footer">
          <button className="faModal-edit-btn" onClick={this.props.handleToggleFAModal}>Close</button>
        </div>

      </div>


      );
    }
  }
  
  export default FAModalPanel;




