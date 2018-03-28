import React from "react";
import "./HeaderPanel.css";
import { Grid, Row, Col } from 'react-bootstrap';
import Button from "../Button";
import ModalPanel from "../ModalPanel";

class HeaderPanel extends React.Component {
    constructor(props) {
      super(props);

    }

    render() {
      console.log('these are my headerpanel props!!', this.props)
      return (
        <Row xs={12} className="header-panel">
            <p className="hp-text"> Vacation Central</p>
            {/* <Button onClick={() => this.props.handleToggleModal(this.props.modalOpen)}>Login/Sign Up</Button> */}
            {/* <ModalPanel show={this.state.modalOpen} onClose={this.handleToggleModal}/> */}
        </Row>
      );
    }
  }
  
  export default HeaderPanel;