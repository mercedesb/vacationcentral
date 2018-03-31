import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { Redirect } from 'react-router'
import "./VacationContainer.css"
import API from "./utils/API";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderPanel from './components/HeaderPanel';
import TripPanel from './components/TripPanel';
import DisplayPanel from './components/DisplayPanel';
import BusinessPanel from './components/BusinessPanel';
import HomePage from "./components/Pages/HomePage";
import ProfilePage from "./components/Pages/ProfilePage";
import FlightsPage from "./components/Pages/FlightsPage";
import BusinessPage from "./components/Pages/BusinessPage";
import MemberPage from "./components/Pages/MemberPage";

class VacationContainer extends Component {
  state = {
    // modalOpen: false,
    user: {},
    tripId: 0,
    userData: {}
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState(prevState => (
      {
        userData: {
          ...prevState.userData,
          [name]: value
        }
      }));
  };

  signUpUser = userData => {
    API.saveUser(userData)
      .then(data => {
        this.setState({
          user: data.data.user, 
          userData: {}
        });
      })
      .catch(err => console.log(err));
  }

  handleSignUp = event => {
    event.preventDefault();
    if (!this.state.userData.email || !this.state.userData.password) { return }
    this.signUpUser(this.state.userData);
  }

  loginUser = userData => {
    API.loginUser(userData)
      .then(data => {
        this.setState({
          user: data.data.user, 
          userData: {}
        });
      })
      .catch(err => console.log(err));
  }

  handleLogIn = event => {
    event.preventDefault();
    if (!this.state.userData.email || !this.state.userData.password) { return }
    this.loginUser(this.state.userData);
  }

  // handleToggleModal = () => {
  //   // console.log("you have clicked the login/signup button");
  //   this.setState({ modalOpen: !this.state.modalOpen })
  // };

  handleSetTripId = (id) => {
    console.log("the trip id", id)
    this.setState({ tripId: id });

  }

  render() {
    console.log("state in VCrender", this.state);
    return (
      <Router>
        <Grid fluid className="vacation-container">
          <Row>
            <HeaderPanel/>
            {/* <ModalPanel show={this.state.modalOpen} onClose={this.handleToggleModal} /> */}
          </Row>
          <Row>
            <TripPanel
              UserId={this.state.user.id}
              handleTripFormSubmit={this.handleTripFormSubmit}
              handleSetTripId={this.handleSetTripId} />
            <DisplayPanel>
              <Switch>
                <Route exact path="/" 
                  render={() => (this.state.user.id ? 
                  <Redirect to="/member" /> : 
                  <HomePage
                    purpose="Log In"
                    handleInputChange={this.handleInputChange}
                    handleLogIn={this.handleLogIn}
                    user={this.state.userData}
                  />)} 
                />
                <Route exact path="/signup" render={() => (this.state.user.id ? 
                  <Redirect to="/member" /> :
                  <HomePage
                    purpose="Sign Up"
                    handleInputChange={this.handleInputChange}
                    handleSignUp={this.handleSignUp}
                    user={this.state.userData}
                  />)}
                />
                {this.state.user.firstName ?
                  <div>
                    <Route exact path="/member/" render={() => <MemberPage user={this.state.user} />} />
                    <Route exact path="/hotels/" render={() => <BusinessPage businessType="Hotels" TripId={this.state.tripId} />} />
                    <Route exact path="/dining/" render={() => <BusinessPage businessType="Dining" TripId={this.state.tripId} />} />
                    <Route exact path="/flights/" render={() => <FlightsPage TripId={this.state.tripId} />} />
                    <Route exact path="/attractions/" render={() => <BusinessPage businessType="Attractions" TripId={this.state.tripId} />} />
                    <Route exact path="/profile/" render={() => <ProfilePage UserId={this.state.user.id} />} />
                  </div> :
                  <Route strict path="/*/" render={() => 
                    <HomePage
                      purpose="Log In"
                      message="Please Log In"
                      handleInputChange={this.handleInputChange}
                      handleLogIn={this.handleLogIn}
                      user={this.state.userData}
                  />} />
                }
              </Switch>
            </DisplayPanel>
            <BusinessPanel userId={this.state.user.id} tripId={this.state.id} handleSelectCategory={this.handleSelectCategory} />
          </Row>
        </Grid>
      </Router >
    );
  }
}

export default VacationContainer;