import React from "react";
import "./HomePage.css";
import { Grid, Row, Col, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Input } from "../../Form";

const HomePage = props => (
  <Grid fluid>
    {!props.message ? undefined: 
      (<Row>
        <Alert bsStyle="danger">
          <h4>{props.message}</h4>
        </Alert>
      </Row>)}
    {!props.error ? undefined: 
      (<Row>
        <Alert bsStyle="danger">
          <h4>{props.error}</h4>
        </Alert>
      </Row>)}  
    <Row>
      <Col xs={12} className="home-page">
        <p className="header">Welcome to Vacation Central</p>
        <p className="second-text">{props.purpose}</p>
        <form className="signup">
          <div className="form-group">
            <label className="label-text" >Email address</label>
            <Input style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
              onChange={props.handleInputChange}
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={props.user.email || ""} />
          </div>
          <div className="form-group">
            <label className="label-text" >Password</label>
            <Input style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
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
                <label className="label-text" >First Name</label>
                <Input style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
                  type="text"
                  name="firstName"
                  onChange={props.handleInputChange}
                  className="form-control"
                  placeholder="First Name"
                  value={props.user.firstName || ""} />
              </div>
              <div className="form-group">
                <label className="label-text" >Last Name</label>
                <Input style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
                  type="text"
                  onChange={props.handleInputChange}
                  name="lastName"
                  className="form-control"
                  placeholder="Last Name"
                  value={props.user.lastName || ""} />
              </div>
              <div className="form-group">
                <label className="label-text" >User Name</label>
                <Input style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
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
          <button className="btn submit-btn" onClick={props.purpose === "Log In" ? props.handleLogIn : props.handleSignUp}>{props.purpose}</button>
        </form>
        <br />
        <div> {props.purpose === "Log In" ? <button className="btn signup-btn"><Link to={"/signup"}>Sign Up</Link></button> :
          <button className="btn signup-btn"><Link to={"/"}>Log In</Link></button>}</div>
      </Col>
    </Row>
  </Grid >
);

export default HomePage;
