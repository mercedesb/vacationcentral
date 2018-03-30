import React from "react";
import "./BusinessDisplay.css";
import { Grid, Row, Col } from 'react-bootstrap';
import BusinessListItem from "./BusinessListItem";


class BusinessDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

  };
    // this.handleToggleCommentsModal=this.handleToggleCommentsModal.bind(this);
}

  // handleToggleCommentsModal = () => {
  //   console.log("you have clicked the comments modal button");
  //   this.setState({commentsModalVisible: !this.state.commentsModalVisible })
  // };



  render() {

    if (!this.props.show) { return null; }

    console.log('these are my business display props & state!!', this.props, this.state)


    return (
      <Col xs={12} >
        <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>

          {this.props.results.filter(business => business.type === this.props.businessType).length !== 0 ?
            this.props.results
              .filter(business => business.type === this.props.businessType)
              .map(business => <BusinessListItem
                editing={this.props.editing}
                editId={this.props.editId}
                getAllBusinesses={this.props.getAllBusinesses}
                id={business.id}
                key={business.id}
                result={business}
                toggleEdit={this.props.toggleEdit} 
                />
                ) :
                <p className="second-text">Add {this.props.businessType} to Start</p>}
                


        </ul>
      </Col>
    );
  }
}

export default BusinessDisplay;