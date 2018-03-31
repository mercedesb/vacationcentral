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
      businessDisplayVisible: false,
      results: [],
      editing: false,
      editId: 0
    };
    this.getAllBusinesses = this.getAllBusinesses.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }


  handleToggleBusinessDisplay = () => {
    this.setState({ businessDisplayVisible: !this.state.businessDisplayVisible })
  };

  toggleEdit = event => {
    console.dir(event.target.id);
    this.setState({
      editing: !this.state.editing,
      editId: event.target.id
    }, () => console.log("toggle edit", this.state));
  };

  getAllBusinesses = () => (
    API.getBusinesses(this.props.TripId)
      .then(response => {
        console.log("biz get", response);
        this.setState({ results: response.data });
      })
  );


  render() {
    console.log("these are my business page props", this.props)
    return (
      <Col xs={12} className="business-page">
      <Row>
        <p className="header">{this.props.businessType}</p>
      </Row>

      <Row>
          <button className='business-btn' onClick={() => {
            this.getAllBusinesses()
              .then(this.handleToggleBusinessDisplay)}}>
            View Your {this.props.businessType} 
          </button>
      </Row>

      <Row>
          <button className='business-btn'>Add {this.props.businessType}</button>
      </Row>

      <Row>
        {this.state.businessDisplayVisible ?
        <BusinessDisplay 
          show={this.state.businessDisplayVisible}
          TripId={this.props.TripId}
          toggleEdit={this.toggleEdit} 
          results={this.state.results} 
          getAllBusinesses={this.getAllBusinesses}
          businessType={this.props.businessType} 
          editing={this.state.editing}
          editId={this.state.editId}
        /> : null}
        </Row>
        <Row>
                {!this.state.editing ?
          <BusinessForm 
            getAllBusinesses={this.getAllBusinesses} 
            businessType={this.props.businessType} 
            TripId={this.props.TripId} 
          /> :
          undefined
        } 
        </Row>
      </Col>
    );
  }
}

export default BusinessPage;