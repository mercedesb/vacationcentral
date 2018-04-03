import React, { Component} from "react";
import { Row, Col } from 'react-bootstrap';
import "./PackingPage.css";
import PackingDisplay from "./PackingDisplay";
import PackingForm from "./PackingForm";
import API from "../../../utils/API";



class PackingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      editing: false,
      editId: 0
    };
    this.getPacking = this.getPacking.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  };

  /**
   * When page is called, requests the getPacking function
   * @param {integer} props.TripId - packing information associated with the specific trip
   */
  componentDidMount = () => {
    this.getPacking(this.props.TripId);
  };

  /**
   * Monitors button click in the PackingDisplay section to make the packing information editable
   * @param {boolean} editing 
   * @param {integer} editId - the database generated id number of the packing information being edited
   */
  toggleEdit = event => {
    this.setState({
      editing: !this.state.editing,
      editId: event.target.id
    });
  };

  /**
   * Requests packing information associated with the specified trip
   * @param {integer} TripId 
   */
  getPacking = () => (
    API.getPacking(this.props.TripId)
      .then(response => {
        this.setState({results: response.data})
      })
      .catch(err => console.log(err))
  );

  render() {
    return (
      <Col xs={12} className="packing-page">
        <Row> <p className="header">Packing</p> </Row>
        <PackingDisplay 
          toggleEdit={this.toggleEdit}
          results={this.state.results}
          TripId={this.props.TripId}
          getPacking={this.getPacking}
          editing={this.state.editing}
          editId={this.state.editId}
          />
        <Row>
        <PackingForm
            TripId={this.props.TripId}
            getPacking={this.getPacking}
          /> 
        </Row>
      </Col>
    );
  }
}

export default PackingPage;