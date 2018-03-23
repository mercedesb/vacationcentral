import React from "react";
import "./BusinessPanel.css";
import { Grid, Row, Col } from 'react-bootstrap';

class BusinessPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    render() {
      console.log('these are my props!!', this.props)
      return (
        <Col xs={2} className="business-panel">
            <h1>BusinessPanel</h1>
        </Col>
      );
    }
  }
  
  export default BusinessPanel;


