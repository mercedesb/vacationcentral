import React from "react";
import "./FlightDisplay.css";
// import restclient from 'restler';
import axios from "axios";
import moment from 'moment';
import FlightListItem from "././FlightListItem";
import { Grid, Row, Col, Div } from 'react-bootstrap';
import { FormBtn, Input, TextArea } from "../../../Form";



class FlightDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fxml_url: 'http://flightxml.flightaware.com/json/FlightXML2/',
      proxy: 'https://cors-anywhere.herokuapp.com/',
      username: 'slippa91',
      apiKey: '84c5409c7ea2dd5a0e3b0ba9b0fb770dee70c920',
    };
    this.callFlightAware = this.callFlightAware.bind(this);
  }

  callFlightAware = (event) => {
    event.preventDefault();
    console.log("in callFlightAware");
    this.callFATemp();
    this.callFATime();
  }

  callFATemp = () => {
    console.log("in callFATemp", this.state);
    axios.get(this.state.proxy + this.state.fxml_url + "MetarEx?airport=KPHX&howMany=1&offset=0", {
      headers : {
        'Authorization' : 'basic c2xpcHBhOTE6ODRjNTQwOWM3ZWEyZGQ1YTBlM2IwYmE5YjBmYjc3MGRlZTcwYzkyMA==',
      } })
      .then(function (result, response) {
        console.log("resultTemp", JSON.parse(result.request.response).MetarExResult.metar[0].cloud_friendly);
        var entry = JSON.parse(result.request.response).MetarExResult.metar[0];
      // console.log("entry", entry);
      //console.log('The temperature at ' + entry.airport + ' is ' + entry.temp_air + 'C');
      console.log('The temperature at ' + entry.airport + ' is ' + (entry.temp_air * 1.8 + 32) + 'F');
    })
  };

  callFATime = () => {
    console.log("in callFATime", this.state);
    axios.get(this.state.proxy + this.state.fxml_url + "FlightInfo?ident=SWA1771&howMany=1", {
      headers : {
        'Authorization' : 'basic c2xpcHBhOTE6ODRjNTQwOWM3ZWEyZGQ1YTBlM2IwYmE5YjBmYjc3MGRlZTcwYzkyMA==',
      } })
      .then(function (result, response) {
      console.log("resultTime", JSON.parse(result.request.response).FlightInfoResult.flights[0].filed_departuretime);
      var entry = JSON.parse(result.request.response).FlightInfoResult.flights[0]
      var departtime =JSON.parse(result.request.response).FlightInfoResult.flights[0].filed_departuretime;
      var convdep = moment(departtime * 1000).format('MMMM Do YYYY,h:mm:ss a');
      // var arrivetime = result.FlightInfoResult.flights[0].estimatedarrivaltime;
      // var convarr = moment(arrivetime * 1000).format('MMMM Do YYYY,h:mm:ss a')
      console.log("entry", entry);
      console.log("Your flight is expected to depart at" + convdep);
      // console.log("arriv time", arrivetime, convarr);
      // console.log("moment", converted.format(dddd, MMMM Do, YYYY));
    })
  };



  render() {

    if (!this.props.show) { return null; }
    console.log('these are my flight display props!!', this.props)
    console.log("this flights array pre-sort", this.props.results);

    let sortedDate = this.props.results.sort((a, b) => new Date(a.date) - new Date(b.date));
    console.log("sorted array", this.props.results)

    return (
      <Col xs={12} className="flight-display">

        <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>

          {this.props.results.length !== 0 ?
            this.props.results.map(flight =>
              <FlightListItem
                editing={this.props.editing}
                editId={this.props.editId}
                getFlights={this.props.getFlights}
                id={flight.id}
                key={flight.id}
                result={flight}
                toggleEdit={this.props.toggleEdit}
                callFlightAware={this.callFlightAware}

              />) :
            <p className="second-text"> Add a flight to start</p>}

        </ul>
      </Col>
    );
  }
}

export default FlightDisplay;