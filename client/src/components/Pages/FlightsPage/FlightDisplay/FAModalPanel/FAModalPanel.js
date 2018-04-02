import React from "react";
import "./FAModalPanel.css";
import API from "../../../../../utils/API"

class FAModalPanel extends React.Component {
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
<<<<<<< HEAD

            <p>Flight  <strong>{this.props.departFlight}</strong>  is estimated to arrive on <strong>{this.props.arriveTime}.</strong></p>
            <br/>
            <p>And the temperature at  <strong>{this.props.arriveLocation}</strong>  is  <strong>{this.props.arriveTemp}</strong>  with  <strong>{this.props.arriveClouds}</strong>.</p>
=======
          <p>Flight  <strong>{this.props.departFlight}</strong>  is expected to depart on <strong>{this.props.departTime}.</strong></p>
          <p>And the temperature at  <strong>{this.props.arriveLocation}</strong>  is  <strong>{this.props.arriveTemp}</strong>  with  <strong>{this.props.arriveClouds}</strong>.</p>
>>>>>>> 99b491cc8d18474a23ca162606779aba63b58339
        </div>
        <div className="footer">
          <button className="faModal-close-btn" onClick={this.props.handleToggleFAModal}>Close</button>
        </div>
      </div>
    );
  }
}

export default FAModalPanel;




