import React from "react";
import "./TripDisplay.css";
import { Col } from 'react-bootstrap';
import TripListItem from "././TripListItem";



class TripDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    if (!this.props.show) { return null; }
    let sortedDate = this.props.results.sort((a, b) => new Date(b.start) - new Date(a.start));
    return (
      <Col xs={12} className="trip-display">
        <ul style={{ width: "100%", paddingLeft: "0px" }}>
          {this.props.results.length !== 0 ?
            this.props.results.map(trip =>
              <TripListItem
                editing={this.props.editing}
                editId={this.props.editId}
                getTrips={this.props.getTrips}
                id={trip.id}
                key={trip.id}
                result={trip}
                toggleEdit={this.props.toggleEdit}
                // handleSetTripId={this.props.handleSetTripId}
                selectedRadioButton={this.props.selectedRadioButton}
                handleRadioButtonSelect={this.props.handleRadioButtonSelect}
              />) :null}
        </ul>
      </Col>
    );
  }
}

export default TripDisplay;