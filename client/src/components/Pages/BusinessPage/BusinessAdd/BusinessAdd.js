import React from "react";
import "./BusinessAdd.css";
import { Grid, Row, Col } from 'react-bootstrap';
import {FormBtn, Input, TextArea} from "../../../Form";

class BusinessAdd extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        type: ""
      }
    }
    
    render() {
      console.log('these are my hotel add props!!', this.props)
      return (
        <Col xs={12} className="business-add">
          <p>Business Add</p>
          <Input xs={6} placeholder="Add Company Name"/>
          <Input xs={6} placeholder="Add Confirmation" /> 
          <Input xs={6} placeholder="Add Company Address" />
          <Input xs={6} placeholder="Add Company Phone" />
          <TextArea xs={12} placeholder="Add Comments" />
        </Col>
      );
    }
  }
  
  export default BusinessAdd;