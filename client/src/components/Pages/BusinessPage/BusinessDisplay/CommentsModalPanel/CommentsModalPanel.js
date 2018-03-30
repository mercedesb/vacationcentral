import React from "react";
import "./CommentsModalPanel.css";
import { Grid, Row, Col } from 'react-bootstrap';
import {FormBtn, Input, TextArea} from "../../../../Form";
import API from "../../../../../utils/API"



class CommentsModalPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        commentsData: {},
        editData: {}
      }
    }

// getAllComments = () => (
//       API.getComments(this.props.BizId)
//         .then(response => {
//           this.setState({ comments: response.data });
//         })
//     );

handleCommentsInputChange = event => {
      const {name, value} = event.target;
      this.setState(prevState => (
      {  commentsData: {
        ...prevState.commentsData,
        BizId: this.props.BizId,
        [name]: value
        }, 
        editData: {
          ...prevState.editData, 
          id: this.state.commentsData.id, 
          [name]: value
        }
      }), () =>
        console.log("comments ", this.state.commentsData));
    };
    
    handleCreateNewComments = event => {
      event.preventDefault();
      API.saveComments(this.state.commentsData)
        .then(response => {
          this.setState({commentsData: {}});
          this.props.getAllComments(this.props.TripId);
        })
        .catch(err => console.log(err));
    }
  
    handleEdit = event => {
      event.preventDefault();
      this.props.toggleEdit(event);
      API.updateComments(this.state.editData, this.props.BizId)
        .then(response => {
          console.log(response.data);
          this.setState({commentsData: {}, editData: {}});
          this.props.getAllComments(this.props.BizId);
        })
        .catch(err => console.log(err));
    }


    render() {

      if(!this.props.show) {return null;}

      console.log('these are my modal props!!', this.props)
    return (

      <div className="modal-panel">
        <form>
        <label className="label-text" >Comments</label>
          <TextArea   
              style={{ width: "90%", margin: "0 auto" }}
              onChange={this.handleCommentsInputChange}
              name="comment"
              value={this.state.commentsData.comment  || ""}
              placeholder="Add comments..." 
              />

            
        </form>    
            <div className="footer">
              <button className="comments-edit-btn" onClick={this.props.editing ? this.handleEdit : this.handleCreateNew}>Submit</button>
              <button className="comments-edit-btn" onClick={this.props.handleToggleCommentsModal}>Close</button>
            </div>

      

      </div>


      );
    }
  }
  
  export default CommentsModalPanel;




