import React from "react";
import "./HeaderPanel.css";
import { Row } from 'react-bootstrap';


const HeaderPanel = props => (
  <Row xs={12} className="header-panel">
    <p className="hp-text"> Vacation Central</p>
    {/* <Button onClick={() => this.props.handleToggleModal(this.props.modalOpen)}>Login/Sign Up</Button> */}
    {/* <ModalPanel show={this.state.modalOpen} onClose={this.handleToggleModal}/> */}
  </Row>
);


export default HeaderPanel;