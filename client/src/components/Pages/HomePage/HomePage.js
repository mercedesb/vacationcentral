import React from "react";
import "./HomePage.css";
import { Grid, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

const HomePage = props => (
  <Grid fluid>
    <Row>
      <Col xs={12} className="home-page">
        <h2>Welcome to Vacation Central</h2>
        <h3>{props.purpose}</h3>
        <form className="signup">
          <div className="form-group">
            <label>Email address</label>
            <input onChange={props.handleInputChange} type="email" name="email" className="form-control" id="email-input" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" onChange={props.handleInputChange} name="password" className="form-control" id="password-input" placeholder="Password" />
          </div>
          {props.purpose === "Log In" ? undefined :
            <div>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" onChange={props.handleInputChange} className="form-control" id="firstName-input" placeholder="First Name" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" onChange={props.handleInputChange} name="lastName" className="form-control" id="lastName-input" placeholder="Last Name" />
              </div>
              <div className="form-group">
                <label>User Name</label>
                <input type="text" onChange={props.handleInputChange} name="userName" className="form-control" id="userName-input" placeholder="User Name" />
              </div>
            </div>}
          <div style={{ display: "none" }} id="alert" className="alert alert-danger" role="alert">
            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span className="sr-only">Error:</span> <span class="msg"></span>
          </div>
          <button type="submit" onClick={props.purpose === "Log In" ? props.handleLogIn : props.handleSignUp} className="btn btn-default">{props.purpose}</button>
        </form>
        <br />
        <p>Or {props.purpose === "Log In" ? <Link to={"/signup"}>sign up</Link> :
          <Link to={"/"}>log in</Link>}</p>
      </Col>
    </Row>
  </Grid >
);

export default HomePage;