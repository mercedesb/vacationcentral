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
            <input 
              onChange={props.handleInputChange} 
              type="email" 
              name="email" 
              className="form-control" 
              placeholder="Email" 
              value={props.user.email || ""} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              onChange={props.handleInputChange} 
              name="password" 
              className="form-control" 
              placeholder="Password" 
              defaultValue="" 
              />
          </div>
          {props.purpose === "Log In" ? undefined :
            <div>
              <div className="form-group">
                <label>First Name</label>
                <input 
                  type="text" 
                  name="firstName" 
                  onChange={props.handleInputChange} 
                  className="form-control" 
                  placeholder="First Name"
                  value={props.user.firstName || ""} />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input 
                  type="text" 
                  onChange={props.handleInputChange} 
                  name="lastName" 
                  className="form-control" 
                  placeholder="Last Name" 
                  value={props.user.lastName || ""} />
              </div>
              <div className="form-group">
                <label>User Name</label>
                <input 
                  type="text" 
                  onChange={props.handleInputChange} 
                  name="userName" 
                  className="form-control" 
                  placeholder="User Name" 
                  value={props.user.userName || ""} />
              </div>
            </div>}
          <div style={{ display: "none" }} id="alert" className="alert alert-danger" role="alert">
            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span className="sr-only">Error:</span> <span className="msg"></span>
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