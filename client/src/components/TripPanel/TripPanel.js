import React from "react";
import "./TripPanel.css";
import { Grid, Row, Col, Div } from 'react-bootstrap';
import {FormBtn, Input, TextArea} from "../Form";
import { List, ListItem } from "../List";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import TripAdd from "./TripAdd";
import TripDisplay from "./TripDisplay";
import { isNull } from "util";


class TripPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

        tripDisplayVisible: false
      };
    }



    handleToggleTripDisplay = () => {
      console.log("tripDisplay is visible")
      this.setState({tripDisplayVisible: !this.state.tripDisplayVisible})
    };



    render() {
      console.log('these are my trip panel props!!', this.props)
      return (
        <Col xs={2} className="trip-panel" >
         

          <Row>
              <TripAdd UserId={this.props.userId} />
          </Row>
          
          <Row>
            <FormBtn className='trip-btn' onClick={this.handleToggleTripDisplay}>View Your Trips</FormBtn>
          </Row>

          <Row>
          {this.state.tripDisplayVisible ? <TripDisplay show={this.state.tripDisplayVisible} UserId={this.props.userId} /> : null}
          </Row>

      </Col>

      );
    }
  }
  
  export default TripPanel;