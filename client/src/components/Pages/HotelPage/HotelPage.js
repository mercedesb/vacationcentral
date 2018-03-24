import React from "react";
import "./HotelPage.css";
import { Grid, Row, Col } from 'react-bootstrap';
import HotelAdd from "./HotelAdd";
import HotelDisplay from "./HotelDisplay";



class HotelPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    render() {
      console.log('these are my HotelPage props!!', this.props)
      return (
        <Col xs={12} className="hotel-page">
          <h1>Hotel Page</h1>
          <HotelAdd />
          <HotelDisplay />
        </Col>
      );
    }
  }
  
  export default HotelPage;