import React from "react";
import "./HeaderPanel.css";
import { Grid, Row, Col } from 'react-bootstrap';
import Button from "../Button";

class HeaderPanel extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      console.log('these are my headerpanel props!!', this.props)
      return (
        <Row xs={12} className="header-panel">
            <p>HeaderPanel
            <Button onClick={() => this.props.handleToggleModal(this.props.modal)}>Login/Sign Up</Button>
            </p>
        </Row>
      );
    }
  }
  
  export default HeaderPanel;