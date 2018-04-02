import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { Redirect } from 'react-router';
import "./VacationContainer.css";
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
import PackingPage from "./components/Pages/PackingPage";
import MemberPage from "./components/Pages/MemberPage";

class VacationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    user: {},
    userData: {},
    tripId: 0,
    tripDestination: "",
    selectedRadioButton: 0
  };
    this.handleRadioButtonSelect = this.handleRadioButtonSelect.bind(this);
  }

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


  handleRadioButtonSelect = (id, destination) => {
    this.setState({ 
      tripId: id,
      tripDestination: destination,
      selectedRadioButton: id, 
    });
  }

  render() {
    return (
      <Router>
        <Grid fluid className="vacation-container">
          <Row>
            <HeaderPanel>
              <BusinessPanel style={{ textAlign: "center"}} userId={this.state.user.id} tripId={this.state.id} handleSelectCategory={this.handleSelectCategory} />
            </HeaderPanel>
          </Row>
          <Row>

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
                    <Route exact path="/member/" render={() => <MemberPage user={this.state.user} tripDestination={this.state.tripDestination} />} />
                    <Route exact path="/hotels/" render={() => <BusinessPage businessType="Hotels" TripId={this.state.tripId} />} />
                    <Route exact path="/dining/" render={() => <BusinessPage businessType="Dining" TripId={this.state.tripId} />} />
                    <Route exact path="/flights/" render={() => <FlightsPage TripId={this.state.tripId} />} />
                    <Route exact path="/attractions/" render={() => <BusinessPage businessType="Places" TripId={this.state.tripId} />} />
                    <Route exact path="/profile/" render={() => <ProfilePage UserId={this.state.user.id} />} />
                    <Route exact path="/packing/" render={() => <PackingPage TripId={this.state.tripId} />} />
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

            <TripPanel
              UserId={this.state.user.id}
              selectedRadioButton={this.state.selectedRadioButton}
              handleRadioButtonSelect={this.handleRadioButtonSelect}
              />
            {/* <BusinessPanel userId={this.state.user.id} tripId={this.state.id} handleSelectCategory={this.handleSelectCategory} /> */}
          </Row>
        </Grid>
      </Router >
    );
  }
}

export default VacationContainer;
