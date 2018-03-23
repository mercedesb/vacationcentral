import React from "react";
import "./DisplayPanel.css";
import { Grid, Row, Col } from 'react-bootstrap';

class DisplayPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    render() {
      console.log('these are my props!!', this.props)
      return (
        <Col xs={8} className="display-panel">
          <h1>DisplayPanel</h1>
        </Col>
      );
    }
  }
  
  export default DisplayPanel;