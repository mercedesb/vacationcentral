import React from "react";
import "./BusinessPanel.css";
import { Grid, Row, Col } from 'react-bootstrap';
import List from "../List";
import CategoryButton from "../CategoryButton";

const businessNameArray = [
  'Profile', 
  'Flights', 
  'Hotel', 
  'Dining', 
  'Attractions', 
  'Packing', 
  'Memories'
]


class BusinessPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

    style

    render() {
     
      console.log('these are my bizpanel props!!', this.props)
      return (
        <Col xs={2} className="business-panel">
            <h1>BusinessPanel</h1>
            {businessNameArray.map(elem => <CategoryButton
              onClick={() => this.props.handleSelectCategory({elem})}
              >{elem}</CategoryButton>)}
        </Col>
      );
    }
  }
  
  export default BusinessPanel;


