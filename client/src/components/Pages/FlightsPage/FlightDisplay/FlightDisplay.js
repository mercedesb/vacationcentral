import React from "react";
import "./FlightDisplay.css";
import axios from "axios";
import moment from 'moment';
import FlightListItem from "././FlightListItem";
import FAModalPanel from "./FAModalPanel";
import { Col } from 'react-bootstrap';

class FlightDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faModalVisible: false,
      fxml_url: 'http://flightxml.flightaware.com/json/FlightXML2/',
      proxy: 'https://cors-anywhere.herokuapp.com/',
      username: '',
      apiKey: '',
      arriveLocation: "",
      arriveTemp: "",
      arriveClouds: "",
      departFlight: "",
      arriveTime: "",
    };
    this.callFlightAware = this.callFlightAware.bind(this);
    this.handleToggleFAModal = this.handleToggleFAModal.bind(this);
  };

  /**
   * The single function from the flight display div 
   * @param {string} flightNumber 
   * @param {string} arrivalLocation
   */
  callFlightAware = (event, flightNumber, arriveLocation) => {
    event.preventDefault();
    this.callFATemp(arriveLocation)
    this.callFATime(flightNumber)
    this.handleToggleFAModal()
  };

  /**
   * Makes an AJAX call to flight aware 
   * @param {string} arriveLocation
   */
  callFATemp = (arriveLocation) => {
    axios.get(this.state.proxy + this.state.fxml_url + "MetarEx?airport=K" + arriveLocation + "&howMany=1&offset=0", {
      headers: {
        'Authorization': 'basic c2xpcHBhOTE6ODRjNTQwOWM3ZWEyZGQ1YTBlM2IwYmE5YjBmYjc3MGRlZTcwYzkyMA==',
      }
    })
      .then((result, response) => {
        var entry = JSON.parse(result.request.response).MetarExResult.metar[0];
        this.setState({
          arriveLocation: entry.airport,
          arriveTemp: (entry.temp_air * 1.8 + 32).toFixed(0),
          arriveClouds: entry.cloud_friendly
        })
      })
  };

  /**
   * Makes an AJAX call to flight aware 
   * @param {string} flightNumber
   */
  callFATime = (flightNumber) => {
    axios.get(this.state.proxy + this.state.fxml_url + "FlightInfo?ident=" + flightNumber + "&howMany=1", {
      headers : {
        'Authorization' : 'basic c2xpcHBhOTE6ODRjNTQwOWM3ZWEyZGQ1YTBlM2IwYmE5YjBmYjc3MGRlZTcwYzkyMA==',
      } })
      .then((result, response) => {
      var entry = JSON.parse(result.request.response).FlightInfoResult.flights[0]
      var estArriveTime =entry.estimatedarrivaltime;
      var convertArrive = moment(estArriveTime * 1000).format('MMMM Do YYYY,h:mm:ss a');
      this.setState ({
            departFlight: entry.ident,
            arriveTime: convertArrive
          }) 
    })
  };

  /**
   * Monitors button click to makes the modal displaying the flight aware info hidden or visible
   */
  handleToggleFAModal = () => {
    this.setState({ faModalVisible: !this.state.faModalVisible })
  };

  render() {
    if (!this.props.show) { return null; }

    let sortedDate = this.props.results.sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
      <Col xs={12} className="flight-display">
        <FAModalPanel
              visible={this.state.faModalVisible}
              handleToggleFAModal={this.handleToggleFAModal}
              arriveLocation={this.state.arriveLocation}
              arriveTemp={this.state.arriveTemp}
              arriveClouds={this.state.arriveClouds}
              departFlight={this.state.departFlight}
              arriveTime={this.state.arriveTime} />

        <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>
          {this.props.results.length !== 0 ?
            this.props.results.map(flight =>
              <FlightListItem
                editing={this.props.editing}
                editId={this.props.editId}
                getFlights={this.props.getFlights}
                deleteFlights={this.props.deleteFlights}
                id={flight.id}
                key={flight.id}
                result={flight}
                toggleEdit={this.props.toggleEdit}
                callFlightAware={this.callFlightAware}
              />) : null}

        </ul>
      </Col>
    );
  };
};

export default FlightDisplay;
