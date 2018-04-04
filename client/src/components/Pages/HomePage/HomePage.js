import React, { Component } from "react";
import "./HomePage.css";
import { Grid, Row, Col, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Input } from "../../Form";
import API from "../../../utils/API";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      userData: {},
    }
  }

  /**
 * Handles physical input of user login/signup and adds them to the userData object.
 * @param {object} userData - input values becomes user data - name, email password
 */
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

  resetState = () => this.setState({
    error: "",
    userData: {}
    });

  /**
  * Makes API call to user database to save user data information.
  * @param {object} userData - user information consists for name, email, password
  */
  signUpUser = userData => {
    API.saveUser(userData)
      .then(data => this.props.handleSuccess(data))
      .catch(err => {
        console.log(err.response.data)
        this.setState({ error: err.response.data })
      });
  }

  /**
  * Simple validation of new user input information before calling signUpUser function
  * @param {object} userData - name, email, password
  */
  handleSignUp = event => {
    event.preventDefault();
    if (!this.state.userData.email || !this.state.userData.password) { return }
    this.signUpUser(this.state.userData);
  }

  /**
  * API call to database to set user data
  * @param {object} userData  - email, password
  * @param {object} user
  */
  loginUser = userData => {
    API.loginUser(userData)
      .then(data => this.props.handleSuccess(data))
      .catch(err => console.log(err));
  }

  /**
  * Simple validation of an existing user input information before calling the loginUser function
  * @param {object} userData - email and password
  */
  handleLogIn = event => {
    event.preventDefault();
    if (!this.state.userData.email || !this.state.userData.password) { return }
    this.loginUser(this.state.userData);
  }


  render() {
    return (
      <Grid fluid>
        {!this.props.message ? undefined :
          (<Row>
            <Alert bsStyle="danger">
              <h4>{this.props.message}</h4>
            </Alert>
          </Row>)}
        {!this.state.error ? undefined :
          (<Row>
            <Alert bsStyle="danger">
              <h4>{this.state.error}</h4>
            </Alert>
          </Row>)}
        <Row>
          <Col xs={12} className="home-page">
            <p className="header">Welcome to Vacationist</p>
            <p className="second-text">{this.props.purpose}</p>
            <form className="signup">
              <div className="form-group">
                <label className="label-text" >Email address</label>
                <Input style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
                  onChange={this.handleInputChange}
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={this.state.userData.email || ""} />
              </div>
              <div className="form-group">
                <label className="label-text" >Password</label>
                <Input style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
                  type="password"
                  onChange={this.handleInputChange}
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  defaultValue=""
                />
              </div>
              {this.props.purpose === "Log In" ? undefined :
                <div>
                  <div className="form-group">
                    <label className="label-text" >First Name</label>
                    <Input style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
                      type="text"
                      name="firstName"
                      onChange={this.handleInputChange}
                      className="form-control"
                      placeholder="First Name"
                      value={this.state.userData.firstName || ""} />
                  </div>
                  <div className="form-group">
                    <label className="label-text" >Last Name</label>
                    <Input style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
                      type="text"
                      onChange={this.handleInputChange}
                      name="lastName"
                      className="form-control"
                      placeholder="Last Name"
                      value={this.state.userData.lastName || ""} />
                  </div>
                  <div className="form-group">
                    <label className="label-text" >User Name</label>
                    <Input style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
                      type="text"
                      onChange={this.handleInputChange}
                      name="userName"
                      className="form-control"
                      placeholder="User Name"
                      value={this.state.userData.userName || ""} />
                  </div>
                </div>}
              <div style={{ display: "none" }} id="alert" className="alert alert-danger" role="alert">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span className="sr-only">Error:</span> <span className="msg"></span>
              </div>
              <button className="btn submit-btn" onClick={this.props.purpose === "Log In" ? this.handleLogIn : this.handleSignUp}>{this.props.purpose}</button>
            </form>
            <br />
            <div> {this.props.purpose === "Log In" ? <button onClick={this.resetState} className="btn signup-btn"><Link to={"/signup"}>Sign Up</Link></button> :
              <button onClick={this.resetState} className="btn signup-btn"><Link to={"/"}>Log In</Link></button>}</div>
          </Col>
        </Row>
      </Grid >
    )
  }
}

export default HomePage;
