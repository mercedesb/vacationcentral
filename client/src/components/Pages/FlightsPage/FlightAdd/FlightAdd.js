import React, { Component} from "react";
import "./FlightAdd.css";
import { Grid, Row, Col, Div } from 'react-bootstrap';
import {FormBtn, Input, TextArea} from "../../../Form";
import API from "../../../../utils/API";

class FlightAdd extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        flightData: {}, 
        editData: {}
      };
    }

    componentDidMount() {
        if(this.props.flightData) {
          this.setState({flightData: this.props.flightData});
        }
      }

    handleFlightInput = event => {
      const {name, value} = event.target;
      this.setState(prevState => (
       { flightData: {
         ...prevState.flightData,
         TripId: this.props.TripId,
        [name]: value
      }, 
        editData: {
        ...prevState.editData, 
        id: this.state.flightData.id,
        [name]: value
        }
       }), () =>
      console.log("flight info", this.state.flightData));
    };

    handleFlightFormSubmit = event => {
        console.log("incoming flight state", this.state.flightData);
      event.preventDefault();
          API.saveFlights(this.state.flightData)
            .then(response => {
                this.setState({flightData: {}});
                this.props.getFlights(this.props.TripId);
            })
            .catch(err => console.log("error flight  Form Submit", err));
    }

    handleFlightEdit = event => {
        console.log("handle flight edit", this.state.editData)
        event.preventDefault();
        this.props.toggleEdit(event);
        API.updateFlights(this.state.editData, this.state.flightData.id)
          .then(response =>{
            console.log(response.data);
            this.setState({flightData: {}, editData: {}});
            this.props.getFlights(this.props.TripId);
          })
            .catch(err => console.log("flight update error", err));
      }
    
    render() {

        console.log('these are my flight add props!!', this.props)

       return (
         <div className="flight-add">

           <p className="second-text">Add a Flight</p>

           <div>
             <Row>
               <label className="label-text">Confirmation Number:</label>
               <Input xs={4} style={{ width: "25%", margin: "0 auto", textAlign: "center" }}
                 value={this.state.flightData.confirmationNumber}
                 name="confirmationNumber"
                 onChange={this.handleFlightInput}
                 type="text"
                 placeholder="Confirmation Number" />

               <label className="label-text">Airline:</label>
               <Input xs={4} style={{ width: "25%", margin: "0 auto", textAlign: "center" }}
                 value={this.state.flightData.airline}
                 name="airline"
                 onChange={this.handleFlightInput}
                 type="text"
                 placeholder="Airline" />

               <label className="label-text">Flight:</label>
               <Input xs={4} style={{ width: "25%", margin: "0 auto", textAlign: "center" }}
                 value={this.state.flightData.flightNumber}
                 name="flightNumber"
                 onChange={this.handleFlightInput}
                 type="text"
                 placeholder="Flight Number" />
             </Row>
             <Row>
               <label className="label-text">Departure Airport:</label>
               <Input xs={6} style={{ width: "40%", margin: "0 auto", textAlign: "center" }}
                 value={this.state.flightData.departLocation}
                 name="departLocation"
                 onChange={this.handleFlightInput}
                 type="text"
                 placeholder="Departure Airport" />

               <label className="label-text">Departure Time:</label>
               <Input xs={6} style={{ width: "40%", margin: "0 auto", textAlign: "center" }}
                 value={this.state.flightData.departTime}
                 name="departTime"
                 onChange={this.handleFlightInput}
                 type="text"
                 placeholder="Departure Time" />
             </Row>
             <Row>
               <label className="label-text">Arrival Airport:</label>
               <Input style={{ width: "40%", margin: "0 auto", textAlign: "center" }}
                 value={this.state.flightData.arriveLocation}
                 name="arriveLocation"
                 onChange={this.handleFlightInput}
                 type="text"
                 placeholder="Arrival Airport" />

               <label className="label-text">Arrival Time:</label>
               <Input style={{ width: "40%", margin: "0 auto", textAlign: "center" }}
                 value={this.state.flightData.arriveTime}
                 name="arriveTime"
                 onChange={this.handleFlightInput}
                 type="text"
                 placeholder="Arrival Time" />

               <button className="btn btn-lrg submit-btn" onClick={this.props.editing ? this.handleFlightEdit : this.handleFlightFormSubmit} >Submit</button>
             </Row>
           </div>


         </div>
      );
    }
  }
  
  export default FlightAdd;