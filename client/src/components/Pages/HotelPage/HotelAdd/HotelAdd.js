import React from "react";
import "./HotelAdd.css";
import { Grid, Row, Col } from 'react-bootstrap';
import {FormBtn, Input, TextArea} from "../../../Form";

class HotelAdd extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        type: "Hotel"
      }
    }
    
    render() {
      console.log('these are my hotel add props!!', this.props)
      return (
        <Col xs={12} className="hotel-add">
          <p>Hotel Add</p>
          <Input xs={6} placeholder="Add Hotel Name"/>
          <Input xs={6} placeholder="Add Confirmation" /> 
          <Input xs={6} placeholder="Add Company Address" />
          <Input xs={6} placeholder="Add Company Phone" />
          <TextArea xs={12} placeholder="Add Comments" />
        </Col>
      );
    }
  }
  
  export default HotelAdd;