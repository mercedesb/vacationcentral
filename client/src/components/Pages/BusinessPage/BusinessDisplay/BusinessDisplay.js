import React from "react";
import "./BusinessDisplay.css";
import { Grid, Row, Col } from 'react-bootstrap';
import BusinessListItem from "./BusinessListItem";
import CommentsModalPanel from "./CommentsModalPanel";


class BusinessDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    commentsModalVisible: false
  };
    this.handleToggleCommentsModal=this.handleToggleCommentsModal.bind(this);
};

  handleToggleCommentsModal = () => {
    console.log("you have clicked the comments modal button");
    this.setState({commentsModalVisible: !this.state.commentsModalVisible })
  };



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
                id={business.TripId}
                key={business.TripId}
                BizId={business.id}
                result={business}
                toggleEdit={this.props.toggleEdit} 
                handleToggleCommentsModal={this.handleToggleCommentsModal}
                commentsModalVisible={this.state.commentsModalVisible}
                />
                ) :
                <p className="second-text">Add {this.props.businessType} to Start</p>}
                
                <CommentsModalPanel
                  show={this.state.commentsModalVisible} 
                  editing={this.props.editing}
                  toggleEdit={this.props.toggleEdit} 
                  editId={this.props.editId}
                  show={this.state.commentsModalVisible} 
                  onClick={this.handleToggleCommentsModal}
                  handleToggleCommentsModal={this.handleToggleCommentsModal}
                  commentsModalVisible={this.state.commentsModalVisible} />

        </ul>
      </Col>
    );
  }
}

export default BusinessDisplay;