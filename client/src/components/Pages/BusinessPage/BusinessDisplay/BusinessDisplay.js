import React from "react";
import "./BusinessDisplay.css";
import { Grid, Row, Col } from 'react-bootstrap';
import BusinessListItem from "./BusinessListItem";
import CommentsModalPanel from "./CommentsModalPanel";


class BusinessDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    commentsModalVisible: false
  }

    handleToggleCommentsModal = (event) => {
      event.preventDefault();
    // console.log("you have clicked the comments modal button");
    this.setState({ commentsModalOpen: !this.commentsModalOpen })
  };

  render() {

    if (!this.props.show) { return null; }

    console.log('these are my business display props!!', this.props)


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
                id={business.TripId}
                key={business.TripId}
                result={business}
                toggleEdit={this.props.toggleEdit} >
                <CommentsModalPanel show={this.state.commentsModalVisible} onClose={this.handleToggleCommentsModal} />
                </BusinessListItem>) :
            <p className="second-text">Add {this.props.business.type} to Start</p>}
        </ul>
      </Col>
    );
  }
}

export default BusinessDisplay;