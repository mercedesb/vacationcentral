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
            <label forHTML="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email-input" placeholder="Email" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password-input" placeholder="Password" />
          </div>
          {props.purpose === "Log In" ? undefined :
            <div>
              <div className="form-group">
                <label forHTML="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email-input" placeholder="Email" />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="password-input" placeholder="Password" />
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