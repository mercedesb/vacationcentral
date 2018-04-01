import React, { Component} from "react";
import { Row, Col } from 'react-bootstrap';
import "./PackingPage.css";
// import PackingAdd from "./PackingAdd";
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
    })
  );


  render() {
    console.log('these are my Packing Page props!!', this.props)
    return (
      <Col xs={12} className="packing-page">

        <Row> <p className="header">Packing</p> </Row>

        {/* <Row>
          <button className='profile-btn' onClick={() =>
            {this.getProfiles()
              .then(this.handleToggleProfileDisplay)}}>
            View Your Profiles
          </button>
        </Row>
        <Row>
          <button className='profile-btn'  onClick={this.handleToggleProfileDisplay}>Add a Rewards Profile</button>
        </Row> */}
        <Row>
        <PackingForm
            TripId={this.props.TripId}
            results={this.state.results}
            toggleEdit={this.toggleEdit}
            editing={this.state.editing}
            editId={this.state.editId}
            getPacking={this.getPacking}
          /> 
        </Row>

        <Row>

          {/* <PackingAdd
            getPacking={this.getPacking}
            TripId={this.props.TripId}
            handleTogglePackingDisplay={this.handleTogglePackingDisplay} /> */}
        </Row>

      </Col>
    );
  }
}

export default PackingPage;