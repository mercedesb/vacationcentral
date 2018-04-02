import React, { Component } from "react";
import "./FAModalPanel.css";

class FAModalPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    if (!this.props.visible) { return null; }

    return (
      <div className="modal-panel">
        <label className="label-text" >Flight Aware Status</label>
        <div className="fa-status-panel">
          <p>Flight  <strong>{this.props.departFlight}</strong>  is expected to arrive on <strong>{this.props.arriveTime}.</strong></p>
          <p>And the temperature at  <strong>{this.props.arriveLocation}</strong>  is  <strong>{this.props.arriveTemp}</strong>  with  <strong>{this.props.arriveClouds}</strong>.</p>
        </div>
        <div className="footer">
          <button className="faModal-close-btn" onClick={this.props.handleToggleFAModal}>Close</button>
        </div>
      </div>
    );
  }
}

export default FAModalPanel;




