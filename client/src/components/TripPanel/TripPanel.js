import React from "react";
import "./TripPanel.css";
import "../../VacationContainer.css"
import { Row, Col } from 'react-bootstrap';
import API from "../../utils/API";
import TripAdd from "./TripAdd";
import TripDisplay from "./TripDisplay";
import moment from 'moment';

class TripPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tripDisplayVisible: true,
      tripAddVisible: true,
      results: [],
      editing: false,
      editId: 0,
    };
    this.getTrips = this.getTrips.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  };


  /**
   * Monitors button click to make the trip display panel hidden or visible
   */
  handleToggleTripDisplay = () => {
    this.setState({ tripDisplayVisible: !this.state.tripDisplayVisible })
  };

   /**
   * Monitors button click to make the trip display panel hidden or visible
   */
  handleToggleTripAdd = () => {
    this.setState({ tripAddVisible: !this.state.tripAddVisible })
  };
 
  /**
   * Monitors button click in the TripDisplay section to make the trip information editable
   * @param {boolean} editing 
   * @param {integer} event.target.id - the database generated id number of the trip being edited
   */
  toggleEdit = event => {
    this.setState({
      editing: !this.state.editing,
      editId: event.target.id
    }, () => console.log(this.state));
  };

  /**
   * Requests trips associated with the logged in user; Using moment for date formatting
   * @param {integer} UserId - database generated id of the logged in user
   */
  getTrips = () => (
    API.getTrips(this.props.UserId)
      .then(response => {
        for (var i = 0; i < response.data.length; i++) {
          response.data[i].start = moment(response.data[i].start).format('MM-DD-YYYY');
          response.data[i].end = moment(response.data[i].end).format('MM-DD-YYYY');
        }
        this.setState({ results: response.data });
      })
  );

  render() {
    return (
      <Col xs={12} md={3} className="trip-panel" >
        <Row>
          <p className="header-trip">Your Trips</p>
        </Row>
        <Row>
          <button
            className="tripDisplay-btn"
            onClick={() => {
              this.getTrips(this.props.UserId)
                .then(this.handleToggleTripDisplay);
            }}>
            View Your Trips
            </button>
        </Row>
        <Row>
          <button
            className="tripDisplay-btn"
            onClick={this.handleToggleTripDisplay} >
            Add a Trip
            </button>
        </Row>
        <Row>
          {this.state.tripDisplayVisible ? <TripDisplay
            show={this.state.tripDisplayVisible}
            UserId={this.props.UserId}
            results={this.state.results}
            toggleEdit={this.toggleEdit}
            editing={this.state.editing}
            editId={this.state.editId}
            getTrips={this.getTrips}
            selectedRadioButton={this.props.selectedRadioButton}
            handleRadioButtonSelect={this.props.handleRadioButtonSelect}
          /> : null}
        </Row>
        <Row>
          {this.state.tripAddVisible ?
            <TripAdd
              show={this.state.tripAddVisible}
              getTrips={this.getTrips}
              UserId={this.props.UserId} />
            : null}
        </Row>
      </Col>
    );
  }
}

export default TripPanel;