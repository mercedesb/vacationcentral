import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { Redirect } from 'react-router';
import "./VacationContainer.css";
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
      tripId: 0,
      tripDestination: "",
      selectedRadioButton: 0,
      // error: ""
    };
    this.handleRadioButtonSelect = this.handleRadioButtonSelect.bind(this);
  }

  handleSuccess = data => {
    this.setState({
      user: data.data.user,
      userData: {}
    });
  }

  /**
   * Monitors trip radio buttons to set the appropriate TripId for the rest of the application
   * @param {integer} TripId 
   * @param {string} Destination
   */
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
              <BusinessPanel userId={this.state.user.id} tripId={this.state.id} handleSelectCategory={this.handleSelectCategory} />
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
                      handleSuccess={this.handleSuccess}
                      user={this.state.user}
                    />)}
                />
                <Route exact path="/signup" render={() => (this.state.user.id ?
                  <Redirect to="/member" /> :
                  <HomePage
                    purpose="Sign Up"
                    handleSuccess={this.handleSuccess}
                    user={this.state.user}
                  />)}
                />
                {this.state.user.firstName ?
                  <div>
                    <Route exact path="/member/" render={() => <MemberPage user={this.state.user} tripDestination={this.state.tripDestination} />} />
                    <Route exact path="/hotels/" render={() => <BusinessPage businessType="Hotels" TripId={this.state.tripId} />} />
                    <Route exact path="/dining/" render={() => <BusinessPage businessType="Dining" TripId={this.state.tripId} />} />
                    <Route exact path="/carrental/" render={() => <BusinessPage businessType="Car Rental" TripId={this.state.tripId} />} />
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
          </Row>
        </Grid>
      </Router >
    );
  }
}

export default VacationContainer;
