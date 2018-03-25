import React, {Component} from "react";
import "./BusinessPage.css";
import { Grid, Row, Col } from 'react-bootstrap';
import { FormBtn, Input, TextArea } from "../../Form";
import BusinessDisplay from "./BusinessDisplay";
import API from "../../../utils/API"

class BusinessPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      businessData: {
        type: props.businessType,
        TripId: props.tripId
      },
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({businessData: { ...prevState.businessData, [name]: value }}));
  };

  handleSubmit = event => {
    // console.log("submitting ", this.state.businessData)
    event.preventDefault();
    API.saveBusiness(this.state.businessData)
      .then(response => this.setState({results: [response.data]}))
      .then(() => console.log(this.state));
  }

  renderDateInputs() {
    if (this.props.businessType === "hotels") {
      return (
        <div>
          <label>Check-in:</label>
          <Input xs={6} type="date" onChange={this.handleInputChange} value={this.state.startDate} name="startDate" placeholder="Check-in Date" />
          <label>Check-out:</label>
          <Input xs={6} type="date" onChange={this.handleInputChange} value={this.state.endDate} name="endDate" placeholder="Check-out Date" />
        </div>);
    }
  }

  render() {
    return (
      <Col xs={12} className="business-page">
        <h1>{this.props.businessType}</h1>
        <form>
          <label>Business Name:</label>
          <Input xs={6} onChange={this.handleInputChange} name="name" value={this.state.name} placeholder="Business Name" />
          <label>Confirmation Number:</label>
          <Input xs={6} onChange={this.handleInputChange} name="confirmationNumber" value={this.state.confirmationNumber} placeholder="Confirmation Number" />
          <label>Address:</label>
          <Input xs={6} onChange={this.handleInputChange} name="address" value={this.state.address} placeholder="Address" />
          <label>Phone Number:</label>
          <Input xs={6} onChange={this.handleInputChange} name="phone" value={this.state.phone} placeholder="Phone Number" />
          {this.renderDateInputs()}
          {/* <label>Comment:</label>
          <TextArea xs={12} placeholder="Add Comments" /> */}
          <FormBtn onClick={this.handleSubmit}>Submit</FormBtn>
        </form>
        <BusinessDisplay />
      </Col>
    );
  }
}

export default BusinessPage;