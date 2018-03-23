import React from "react";
import "./HeaderPanel.css";
import { Grid, Row, Col } from 'react-bootstrap';

class HeaderPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    render() {
      console.log('these are my props!!', this.props)
      return (
        <Row xs={12} className="header-panel">
            <h1>HeaderPanel</h1>
        </Row>
      );
    }
  }
  
  export default HeaderPanel;