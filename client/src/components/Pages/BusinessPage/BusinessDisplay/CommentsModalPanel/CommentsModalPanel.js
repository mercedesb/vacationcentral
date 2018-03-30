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

handleCommentsInputChange = event => {
      const {name, value} = event.target;
      this.setState(prevState => (
      {  commentsData: {
        ...prevState.commentsData,
        // BizId: this.props.BizId,
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
    
// handleCommentsModalText= event => {
//       console.log("incoming login state", this.state.loginData);
//       event.preventDefault();
//         if (this.state.user && this.state.password) {
//           API.getLogin(this.state.loginData)
//             .then(res => this.setState({results: [res.data], loginData: {}}))
//             .then(() => console.log("login state back", this.state))
//             .catch(err => console.log("error Trip Form Submit", err));
//         } 
//     };

    



    render() {

      if(!this.props.show) {return null;}

      console.log('these are my modal props!!', this.props)
    return (

      <div className="modal-panel">
        <p className="header">Comments</p>
        <form>

          <TextArea   
                  style={{ width: "70%", margin: "0 auto" }}
              value={this.state.commentsData.comment  || ""}
              name="comment"
              onChange={this.handleCommentInputChange}
              type="text"
              placeholder="Add comments..." />



          <button className="business-edit-btn" onClick={this.handleCommentsModalText}>Submit</button>
            
        </form>    
            <div className="footer">
              <button onClick={() => this.props.handleToggleCommentsModal(this.props.commentsModalVisible)}>Close</button>
            </div>

      

      </div>


      );
    }
  }
  
  export default CommentsModalPanel;




