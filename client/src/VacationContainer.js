import React, {Component} from "react";
import { Grid, Row, Col } from 'react-bootstrap';
// import API from "./utils/API";
import HeaderPanel from './components/HeaderPanel';
import TripPanel from './components/TripPanel';
import DisplayPanel from './components/DisplayPanel';
import BusinessPanel from './components/BusinessPanel';



class VacationContainer extends Component {
    state = {
  
    };

  
    render() {
      console.log("state", this.state);
      return (
        <Grid fluid>
              <Row>
                <HeaderPanel />
              </Row>
              <Row>
                <TripPanel />
                <DisplayPanel />
                <BusinessPanel />
              </Row>
        </Grid>
      );
    }
  }
  
  export default VacationContainer;