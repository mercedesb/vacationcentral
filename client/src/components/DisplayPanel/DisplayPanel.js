import React from "react";
import "./DisplayPanel.css";

import { Grid, Row, Col } from 'react-bootstrap';
import HomePage from "../Pages/HomePage";
import ProfilePage from "../Pages/ProfilePage";
import FlightsPage from "../Pages/FlightsPage";
import BusinessPage from "../Pages/BusinessPage";

// 'Home'
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
          return (<HomePage />)
          break;
        case ("Profile"):
          return <ProfilePage />;
          break;
        case ("Flights"):
          return <FlightsPage />;
          break;
        case ("Hotel"):
          return <BusinessPage businessType="hotel" />;
          break; 
        case ("Dining"):
          return <BusinessPage businessType="dining" />;
          break;   
        case ("Attractions"):
          return <BusinessPage businessType="attractions" />;
          break;             
        default:
          (<HomePage />)

      }
    };

    render() {
      console.log('these are my display page props!!', this.props)
      return (
        <Col xs={8} className="display-panel">
          <p>DisplayPanel</p>
          <div>
            {this.renderSwitch(this.props.dpCategory)}
          </div>
        </Col>
      );
    }
  }
  
  export default DisplayPanel;