import React from "react";
import "./BusinessPage.css";
import { Grid, Row, Col } from 'react-bootstrap';
import BusinessAdd from "./BusinessAdd";
import BusinessDisplay from "./BusinessDisplay";



class BusinessPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    render() {
      console.log('these are my BusinessPage props!!', this.props)
      return (
        <Col xs={12} className="business-page">
          <h1>{this.props.businessType}</h1>
          <BusinessAdd />
          <BusinessDisplay />
        </Col>
      );
    }
  }
  
  export default BusinessPage;