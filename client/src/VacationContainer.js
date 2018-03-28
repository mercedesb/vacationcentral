import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router'
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
      user: {},
      category: "",
      tripId: 4,
      userData: {},
      loggedin: false,
    };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState(prevState => (
      {
        userData: {
          ...prevState.userData,
          [name]: value
        }
      }), () => console.log(this.state.userData));
  };

  signUpUser = userData => {
    API.saveUser(userData)
      .then(data => {
        console.log(data);
        window.location.replace(data.data);
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
        console.log("data", data);
        this.setState({ loggedin: true });
        console.log(this.state.user);
        window.location.replace(data.data);
      })
      .catch(err => console.log(err));
  }

  handleLogIn = event => {
    event.preventDefault();
    if (!this.state.userData.email || !this.state.userData.password) { return }
    this.loginUser(this.state.userData);
  }

  handleToggleModal = () => {
    // console.log("you have clicked the login/signup button");
    this.setState({ modalOpen: !this.state.modalOpen })
  };


  handleSelectCategory = (bpCategory) => {
    // console.log("the category selected was", bpCategory);
    this.setState({ category: bpCategory.elem });
    console.log("category state in hSC", this.state.category);
  }

  handleSetTripId = (id) => {
    console.log("the trip id selected was", id)
    this.setState( {tripId: id});
  }


  handleDisplayPage = (category) => {
    console.log("you have entered the DisplayPage function", category);
  }

  render() {
    // console.log("state in VCrender", this.state);
    return (
      <Router>
        <Grid fluid className="vacation-container">
          <Row>
            <HeaderPanel handleToggleModal={this.handleToggleModal} />
            <ModalPanel show={this.state.modalOpen} onClose={this.handleToggleModal} />
          </Row>
          <Row>
            <TripPanel 
              UserId={this.state.user.id} 
              handleTripFormSubmit={this.handleTripFormSubmit}
              handleSetTripId={this.handleSetTripId} />
            <DisplayPanel
              userId={this.state.user.id}
              tripId={this.state.id}
              dpCategory={this.state.category}
              handleDisplayPage={this.handleDisplayPage}>
              <Switch>
                <Route exact path="/" render={() => <HomePage
                  purpose="Log In"
                  handleInputChange={this.handleInputChange}
                  handleLogIn={this.handleLogIn}
                  user={this.state.userData}
                />} />
                <Route exact path="/signup" render={() => <HomePage
                  purpose="Sign Up"
                  handleInputChange={this.handleInputChange}
                  handleSignUp={this.handleSignUp}
                  user={this.state.userData}
                />} />
                <Route exact path="/member" render={() => <MemberPage />} />
                <Route exact path="/hotels" render={() => <BusinessPage businessType="hotels" tripId={1} />} />
                <Route exact path="/dining" render={() => <BusinessPage businessType="dining" tripId={1} />} />
                <Route exact path="/flights" render={() => <FlightsPage TripId={this.state.id} />} />
                <Route exact path="/attractions" render={() => <BusinessPage businessType="attractions" tripId={1} />} />
                <Route exact path="/profile" render={() => <ProfilePage UserId={this.state.user.id} />} />
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