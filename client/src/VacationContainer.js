import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import "./VacationContainer.css"
import API from "./utils/API";
import HeaderPanel from './components/HeaderPanel';
import TripPanel from './components/TripPanel';
import DisplayPanel from './components/DisplayPanel';
import BusinessPanel from './components/BusinessPanel';
import ModalPanel from './components/ModalPanel';



class VacationContainer extends Component {
   state = {
      modalOpen: false,
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

  handleToggleModal = () => {
      console.log("you have clicked the login/signup button");
      this.setState({modalOpen: !this.state.modalOpen})
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
        <Grid fluid className="vacation-container">
              <Row>
                <HeaderPanel handleToggleModal={this.handleToggleModal}/>
                <ModalPanel show={this.state.modalOpen} onClose={this.handleToggleModal}/>
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