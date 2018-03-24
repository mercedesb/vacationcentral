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
      protype: "", 
      proconame: "", 
      procomemberno: "", 
      procomemberphone: "",
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

handleProfileInputChange = event => {
  const {name, value} = event.target;
  this.setState({
    [name]: value
  });
};

handleProfileFormSubmit = event => {
  event.preventDefault();
    if (this.state.firstName === "" && this.state.lastName === "") {
      alert("Please enter a first and last name");
    } else if (this.state.passWord.length < 6) {
      alert("Please create a stronger password");
    } else {

  // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
  alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
  
  this.setState({
    firstName: "",
    lastName: "",
    passWord: ""
  });
};
};



    render() {
      console.log("state in VCrender", this.state);
      return (
        <Grid fluid>
              <Row>
                <HeaderPanel handleToggleModal={this.handleToggleModal}/>
              </Row>
              <Row>
                <TripPanel />
                <DisplayPanel dpCategory={this.state.category} handleDisplayPage={this.handleDisplayPage}/>
                <BusinessPanel handleSelectCategory={this.handleSelectCategory}/>
              </Row>
        </Grid>
      );
    }
  }
  
  export default VacationContainer;