import React, { Component } from "react";
import "./BusinessPage.css";
import { Row, Col } from 'react-bootstrap';
import BusinessDisplay from "./BusinessDisplay";
import BusinessForm from "./BusinessForm";
import API from "../../../utils/API"

class BusinessPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessDisplayVisible: false,
      results: [],
      editing: false,
      editId: 0
    };
    this.getAllBusinesses = this.getAllBusinesses.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deleteBusiness = this.deleteBusiness.bind(this);
    this.handleToggleBusinessDisplay = this.handleToggleBusinessDisplay.bind(this);
  }

  handleToggleBusinessDisplay = () => {
    this.setState({ businessDisplayVisible: !this.state.businessDisplayVisible })
  };

  toggleEdit = event => {
    console.dir(event.target.id);
    this.setState({
      editing: !this.state.editing,
      editId: event.target.id
    });
  };

  getAllBusinesses = tripId => (
    API.getBusinesses(tripId)
      .then(response => this.setState({ results: response.data }))
      .catch(err => console.log(err))
  );

  deleteBusiness = businessId => (
    API.deleteBusiness(businessId)
      .then(response => {
        console.log(response);
        this.getAllBusinesses(this.props.TripId);
      })
      .catch(err => console.log(err))
  )

  render() {
    return (
      <Col xs={12} className="business-page">
        <Row>
          <p className="header">{this.props.businessType}</p>
        </Row>
        <Row>
          <button className='business-btn' onClick={() => {
            this.getAllBusinesses(this.props.TripId)
              .then(this.handleToggleBusinessDisplay)
          }}>
            View Your {this.props.businessType}
          </button>
        </Row>
        <Row>
          <button className='business-btn' onClick={this.handleToggleBusinessDisplay}>Add {this.props.businessType}</button>
        </Row>
        <Row>
          {this.state.businessDisplayVisible ?
            <BusinessDisplay
              show={this.state.businessDisplayVisible}
              toggleEdit={this.toggleEdit}
              results={this.state.results}
              tripId={this.props.TripId}
              deleteBusiness={this.deleteBusiness}
              getAllBusinesses={() => this.getAllBusinesses(this.props.TripId)}
              handleToggleBusinessDisplay={this.handleToggleBusinessDisplay}
              businessType={this.props.businessType}
              editing={this.state.editing}
              editId={this.state.editId}
            /> : null}
        </Row>
        <Row>
          <BusinessForm
            getAllBusinesses={() => this.getAllBusinesses(this.props.TripId)}
            businessType={this.props.businessType}
            TripId={this.props.TripId}
            handleToggleBusinessDisplay={this.handleToggleBusinessDisplay}
          />
        </Row>
      </Col>
    );
  }
}

export default BusinessPage;