import React, { Component } from "react";
import "./BusinessPage.css";
import { Grid, Row, Col } from 'react-bootstrap';
import BusinessDisplay from "./BusinessDisplay";
import BusinessForm from "./BusinessForm";
import API from "../../../utils/API"

class BusinessPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      editing: false
    };
    this.getAllBusinesses = this.getAllBusinesses.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentWillMount() {
    this.getAllBusinesses();
  }

  toggleEdit = event => {
    this.setState({editing: !this.state.editing});
  };

  getAllBusinesses = () => (
    API.getBusinesses(this.props.tripId)
      .then(response => {
        this.setState({ results: response.data }, () => console.log(this.state))
      })
  );

  render() {
    return (
      <Col xs={12} className="business-page">
        <h1>{this.props.businessType}</h1>
        {!this.state.editing ?
          <BusinessForm 
            getAllBusinesses={this.getAllBusinesses} 
            businessType={this.props.businessType} 
            tripId={this.props.tripId} 
          /> :
          undefined
        } 
        <BusinessDisplay 
          toggleEdit={this.toggleEdit} 
          results={this.state.results} 
          businessType={this.props.businessType} 
          editing={this.state.editing}
        />
      </Col>
    );
  }
}

export default BusinessPage;