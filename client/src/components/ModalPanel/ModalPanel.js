import React from "react";
import "./ModalPanel.css";
import { Grid, Row, Col } from 'react-bootstrap';


class ModalPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    render() {
      console.log('these are my props!!', this.props)
      return (
        <div className="modal-panel">
           <div className="login-panel"> 
            <h1>Modal Panel</h1>
            </div>
        </div>
      );
    }
  }
  
  export default ModalPanel;