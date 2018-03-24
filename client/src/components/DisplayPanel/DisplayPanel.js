import React from "react";
import "./DisplayPanel.css";
import { Grid, Row, Col } from 'react-bootstrap';
import FlightsPage from "../Pages/FlightsPage";
import HomePage from "../Pages/HomePage";

// 'Profile', 
// 'Flights', 
// 'Hotel', 
// 'Dining', 
// 'Attractions', 
// 'Packing', 
// 'Memories'

class DisplayPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        page: <HomePage />
      }
    }

    renderSwitch(page) {
      switch(page) {
        case ("Home"):
        (<HomePage />)
          break;
        case ("Flights"):
          return <FlightsPage />;
          break;
        default:
          (<HomePage />)

      }
    };



    render() {

      console.log('these are my display page props!!', this.props)
      return (
        <Col xs={8} className="display-panel">
          <h1>DisplayPanel</h1>
          <div>
            {this.renderSwitch(this.props.dpCategory)}
          </div>
        </Col>
      );
    }
  }
  
  export default DisplayPanel;