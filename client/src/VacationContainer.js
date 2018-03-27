import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import "./VacationContainer.css"
import API from "./utils/API";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderPanel from './components/HeaderPanel';
import TripPanel from './components/TripPanel';
import DisplayPanel from './components/DisplayPanel';
import BusinessPanel from './components/BusinessPanel';
import ModalPanel from './components/ModalPanel';
import HomePage from "./components/Pages/HomePage";
import ProfilePage from "./components/Pages/ProfilePage";
import FlightsPage from "./components/Pages/FlightsPage";
import BusinessPage from "./components/Pages/BusinessPage";
import MemberPage from "./components/Pages/MemberPage";



class VacationContainer extends Component {
  state = {
    modalOpen: false,
    user: 1,
    category: "",
    tripId: 4,
  };


  // componentDidMount() {
  //   this.loadTrips();
  // };

  // loadTrips = user => {
  //   API.getTrips(UserId)
  //     .then(res =>
  //       this.setState({trips: res.data, destination: "", start: "", end: "", id: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  handleToggleModal = () => {
    console.log("you have clicked the login/signup button");
    this.setState({ modalOpen: !this.state.modalOpen })
  };


  handleSelectCategory = (bpCategory) => {
    console.log("the category selected was", bpCategory);
    this.setState({ category: bpCategory.elem });
    console.log("category state in hSC", this.state.category);
  }

  handleDisplayPage = (category) => {
    console.log("you have entered the DisplayPage function", category);
  }

  render() {
    console.log("state in VCrender", this.state);
    return (
      <Router>
        <Grid fluid className="vacation-container">
          <Row>
            <HeaderPanel handleToggleModal={this.handleToggleModal} />
            <ModalPanel show={this.state.modalOpen} onClose={this.handleToggleModal} />
          </Row>
          <Row>
            <TripPanel UserId={this.state.user} handleTripFormSubmit={this.handleTripFormSubmit} />
            <DisplayPanel
              userId={this.state.user}
              tripId={this.state.id}
              dpCategory={this.state.category}
              handleDisplayPage={this.handleDisplayPage}>
              <Switch>
                <Route exact path="/" render={() => <HomePage 
                  purpose="Log In" 
                  handleInputChange={this.handleInputChange} 
                  handleLogIn={this.handleLogIn} 
                  tripId={this.state.tripId} 
                />} />
                <Route exact path="/signup" render={() => <HomePage 
                  purpose="Sign Up" 
                  handleSignUp={this.handleSignUp} 
                  tripId={this.state.tripId} 
                />} />
                <Route exact path="/member" render={() => <MemberPage />} />
                <Route exact path="/hotels" render={() => <BusinessPage businessType="hotels" tripId={1} />} />
                <Route exact path="/dining" render={() => <BusinessPage businessType="dining" tripId={1} />} />
                <Route exact path="/flights" render={() => <FlightsPage TripId={this.state.id}  />} />
                <Route exact path="/attractions" render={() => <BusinessPage businessType="attractions" tripId={1} />} />
                <Route exact path="/profile" render={() => <ProfilePage  UserId={this.state.user} />} />
              </Switch>
            </DisplayPanel>
            <BusinessPanel userId={this.state.user} tripId={this.state.id} handleSelectCategory={this.handleSelectCategory} />
          </Row>
        </Grid>
      </Router >
    );
  }
}

export default VacationContainer;