import React from "react";
import "./HomePage.css";
import { Grid, Row, Col } from 'react-bootstrap';

class HomePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    render() {
      console.log('these are my HomePage props!!', this.props)
      return (
        <Col xs={12} className="home-page">
          <h1>HomePage</h1>

        </Col>
      );
    }
  }
  
  export default HomePage;