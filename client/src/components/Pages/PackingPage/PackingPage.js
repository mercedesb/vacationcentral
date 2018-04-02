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
  }

  componentDidMount = () => {
    this.getPacking(this.props.TripId);
  }


  toggleEdit = event => {
    this.setState({
      editing: !this.state.editing,
      editId: event.target.id
    }, () => console.log("toggle profile edit", this.state));
  };

  getPacking = () => (
    API.getPacking(this.props.TripId)
    .then(response => {
      this.setState({results: response.data})
      console.log("get packing results", this.state.results)

    })
  );


  render() {
    console.log('these are my Packing Page props!!', this.props)
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

        <Row>

        </Row>

      </Col>
    );
  }
}

export default PackingPage;