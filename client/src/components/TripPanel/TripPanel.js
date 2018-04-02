import React from "react";
import "./TripPanel.css";
import "../../VacationContainer.css"
import { Row, Col } from 'react-bootstrap';
import API from "../../utils/API";
import TripAdd from "./TripAdd";
import TripDisplay from "./TripDisplay";


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
    }

    handleToggleTripDisplay = () => {
      console.log("tripDisplay is visible")
      this.setState({tripDisplayVisible: !this.state.tripDisplayVisible})
    };

    handleToggleTripAdd = () => {
      console.log("tripAdd is visible")
      this.setState({tripAddVisible: !this.state.tripAddVisible})
    };


    toggleEdit = event => {
      this.setState({
        editing: !this.state.editing,
        editId: event.target.id
      }, () => console.log(this.state));
    };
  
    getTrips = () => (
      API.getTrips(this.props.UserId)
      .then(response => {
        this.setState({results: response.data})
      })
    );


    render() {
      console.log('these are my trip panel props!!', this.props)


      return (
        <Col xs={2} className="trip-panel" >
         
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
          // handleSetTripId={this.props.handleSetTripId}
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