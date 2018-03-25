import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import API from "./utils/API";
import HeaderPanel from './components/HeaderPanel';
import TripPanel from './components/TripPanel';
import DisplayPanel from './components/DisplayPanel';
import BusinessPanel from './components/BusinessPanel';



class VacationContainer extends Component {
   state = {
      modal: false,
      user: "",
      category: "",
      id: "",
    
  };

  componentDidMount() {
    this.loadTrips();
  };

  loadTrips = user => {
    API.getTrips(user)
      .then(res =>
        this.setState({trips: res.data, destination: "", start: "", end: "", id: "" })
      )
      .catch(err => console.log(err));
  };

  handleToggleModal = (modal) => {
      console.log("you have clicked the login/signup button");
      this.setState({modal: !this.state.modal})
    };


  handleSelectCategory = (bpCategory) => {
    console.log("the category selected was", bpCategory );
    this.setState({category: bpCategory.elem});
    console.log("category state in hSC", this.state.category);
}

  handleDisplayPage = (category) => {
  console.log("you have entered the DisplayPage function", category);
}


    render() {
      console.log("state in VCrender", this.state);
      return (
        <Grid fluid>
              <Row>
                <HeaderPanel handleToggleModal={this.handleToggleModal}/>
              </Row>
              <Row>
                <TripPanel userId={this.state.user} handleTripFormSubmit={this.handleTripFormSubmit}/>
                <DisplayPanel userId={this.state.user} tripId={this.state.id} dpCategory={this.state.category} handleDisplayPage={this.handleDisplayPage}/>
                <BusinessPanel userId={this.state.user} tripId={this.state.id} handleSelectCategory={this.handleSelectCategory}/>
              </Row>
        </Grid>
      );
    }
  }
  
  export default VacationContainer;