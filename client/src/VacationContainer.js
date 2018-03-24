import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// import API from "./utils/API";
import HeaderPanel from './components/HeaderPanel';
import TripPanel from './components/TripPanel';
import DisplayPanel from './components/DisplayPanel';
import BusinessPanel from './components/BusinessPanel';



class VacationContainer extends Component {
   state = {
      modal: false,
      category: "",
  };

handleToggleModal = (modal) => {
      console.log("you have clicked the login/signup button");
      this.setState({modal: !this.state.modal})
    };

handleSelectCategory = (category) => {
    console.log("the category selected was", category);
}

    render() {
      console.log("state", this.state);
      return (
        <Grid fluid>
              <Row>
                <HeaderPanel handleToggleModal={this.handleToggleModal}/>
              </Row>
              <Row>
                <TripPanel />
                <DisplayPanel />
                <BusinessPanel handleSelectCategory={this.handleSelectCategory}/>
              </Row>
        </Grid>
      );
    }
  }
  
  export default VacationContainer;