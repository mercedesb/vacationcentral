import React, { Component } from "react";
import "./BusinessForm.css";
import { Input, TextArea } from "../../../Form";
import API from "./../../../../utils/API"

class BusinessForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessData: {},
      editData: {}
    };
  }

  componentDidMount() {
    if (this.props.businessData) {
      this.setState({ businessData: this.props.businessData });
    }
  };

  /**
  * onChange callback for form inputs
  * @param {object} event
  */
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState(prevState => {
      return (
        {
          businessData: {
            ...prevState.businessData,
            type: this.props.businessType,
            TripId: this.props.TripId,
            [name]: value
          },
          editData: {
            ...prevState.editData,
            [name]: value
          }
        })
    });
  };

  /**
  * submits a new business to save to the database
  * @param {object} event
  */
  handleCreateNew = event => {
    event.preventDefault();
    API.saveBusiness(this.state.businessData)
      .then(response => {
        this.setState({ businessData: {} });
        this.props.getAllBusinesses(this.props.TripId);
      })
      .catch(err => console.log(err));
  }

  /**
  * submits updated business to save to the database
  * @param {object} event
  */
  handleEdit = event => {
    event.preventDefault();
    this.props.toggleEdit(event);
    API.updateBusiness(this.state.editData, this.props.id)
      .then(response => {
        this.setState({businessData: {}, editData: {}});
        this.props.getAllBusinesses(this.props.TripId);
      })
      .catch(err => console.log(err));
  }

  /**
  * returns date input fields based on businessData existing
  */
  renderDateInputs() {
    if ((this.props.businessType || this.state.businessData.type) === "Hotels" || "Car Rental") {
      return (
        <div>
          <label className="label-text" >Check-in:</label>
          <Input xs={6} style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
            type="date"
            onChange={this.handleInputChange}
            value={this.state.businessData.startDate || ""}
            name="startDate" placeholder="Check-in Date"
          />
          <label className="label-text" >Check-out:</label>
          <Input style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
            xs={6}
            type="date"
            onChange={this.handleInputChange}
            value={this.state.businessData.endDate || ""}
            name="endDate"
            placeholder="Check-out Date"
          />
        </div>);
    }
  }

  render() {
    return (
      <div className="business-add">
        <p className="second-text">Add {this.props.businessType}</p>
        
        <label className="label-text" >Business Name:</label>
        <Input style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
          xs={6}
          onChange={this.handleInputChange}
          name="name" value={this.state.businessData.name || ""}
          placeholder="Business Name"
        />
        <label className="label-text" >Confirmation Number:</label>
        <Input
          xs={6} style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
          onChange={this.handleInputChange}
          name="confirmationNumber"
          value={this.state.businessData.confirmationNumber || ""}
          placeholder="Confirmation Number"
        />
        <label className="label-text" >Address:</label>
        <Input
          xs={6} style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
          onChange={this.handleInputChange}
          name="address"
          value={this.state.businessData.address || ""}
          placeholder="Address"
        />
        <label className="label-text" >Phone Number:</label>
        <Input
          xs={6} style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
          onChange={this.handleInputChange}
          name="phone"
          value={this.state.businessData.phone || ""}
          placeholder="Phone Number"
        />

        {this.renderDateInputs()}

        <label className="label-text" >Comments:</label>
        <TextArea
          xs={6} style={{ width: "70%", margin: "0 auto" }}
          onChange={this.handleInputChange}
          name="comments"
          value={this.state.businessData.comments || ""}
          placeholder="Add your comments..."
        />
        <button className="btn btn-lrg submit-btn" onClick={this.props.editing ? this.handleEdit : this.handleCreateNew}>Submit</button>
      </div>
    )
  }
};

export default BusinessForm;