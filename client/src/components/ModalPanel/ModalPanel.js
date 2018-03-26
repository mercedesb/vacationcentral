import React from "react";
import "./ModalPanel.css";
import { Grid, Row, Col } from 'react-bootstrap';
import {FormBtn, Input, TextArea} from "../Form";
import API from "../../utils/API";



class ModalPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        res: [],
        loginData: {},
        signUpData: {}
      }
    }

handleLogin = event => {
      const {name, value} = event.target;
      this.setState(prevState => (
      {  loginData: {
        ...prevState.loginData,
        [name]: value
        }
      }), () =>
        console.log("login info", this.state.loginData));
    }; 

handleLoginFormSubmit = event => {
      console.log("incoming login state", this.state.loginData);
      event.preventDefault();
        if (this.state.user && this.state.password) {
          API.getLogin(this.state.loginData)
            .then(res => this.setState({results: [res.data], loginData: {}}))
            .then(() => console.log("login state back", this.state))
            .catch(err => console.log("error Trip Form Submit", err));
        } 
    };

handleSignUp = event => {
      const {name, value} = event.target;
      this.setState(prevState => (
      {  signUpData: {
        ...prevState.signUpData,
        [name]: value
        }
      }), () =>
        console.log("login info", this.state.signUpData));
    }; 

handleSignUpFormSubmit = event => {
      console.log("incoming signup state", this.state.signUpData);
      event.preventDefault();
        if (this.state.userName && this.state.email && this.state.password) {
          API.saveSignUp(this.state.signUpData)
            .then(res => this.setState({results: [res.data], signUpData: {}}))
            .then(() => console.log("login state back", this.state))
            .catch(err => console.log("error Trip Form Submit", err));
        } 
    };
    



    render() {

      if(!this.props.show) {
        return null;
      }

      console.log('these are my modal props!!', this.props)
    return (

      <div className="modal-panel">
        <h1>Modal Panel</h1>

          <div className="login-panel">

            <h1>Login</h1>
        <form>
          <label>Enter your user name:</label>
          <Input xs={12}
              value={this.state.loginData.userName}
              name="userName"
              onChange={this.handleLogin}
              type="text"
              placeholder="Input your user name" />

          <label>Enter your password:</label>
          <Input xs={12}
              value={this.state.loginData.password}
              name="password"
              onChange={this.handleLogin}
              type="text"
              placeholder="Input your password" />

          
          <FormBtn onClick={this.handleLoginFormSubmit}>Submit</FormBtn>
          </form>

        <form>
          <h1>Sign Up</h1>
          <h2> Please enter a username, email and password</h2>

          <label>Enter a user name:</label>
          <Input xs={12}
              value={this.state.signUpData.userName}
              name="userName"
              onChange={this.handleSignUp}
              type="text"
              placeholder="Input your user name" />

          <label>Enter an email:</label>
          <Input xs={12}
              value={this.state.signUpData.email}
              name="email"
              onChange={this.handleSignUp}
              type="text"
              placeholder="Input your email" />

          <label>Enter a password:</label>
          <Input xs={12}
              value={this.state.signUpData.password}
              name="password"
              onChange={this.handleSignUp}
              type="text"
              placeholder="Input a password" />

          <FormBtn onClick={this.handleSignUpFormSubmit}>Submit</FormBtn>
            
        </form>    
            <div className="footer">
              <button onClick={() => this.props.handleToggleModal(this.props.modalOpen)}>Close</button>
            </div>

          </div>

      </div>


      );
    }
  }
  
  export default ModalPanel;




