import React, { Component } from "react";
import "./PackingForm.css";
import { Input, TextArea } from "../../../Form";
import API from "./../../../../utils/API"

class PackingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packingData: {},
      editData: {}
    };
  };

/**
 * Set the all the trip data when the PackingForm section is displayed
 * @param {object} props.packingData
 */
  componentDidMount() {
    if (this.props.packingData) {
      this.setState({ packingData: this.props.packingData });
    }
  };

  /**
  * Handles physical input of user packing information and adds it to the packingData object.
  * @param {object} packingData - input values becomes packing data
  * @param {integer} TripId
  * @param {object} editData - trip data assigned for editing
  */
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState(prevState => {
      return (
        {
          packingData: {
            ...prevState.packingData,
            TripId: this.props.TripId,
            [name]: value
          },
          editData: {
            ...prevState.editData,
            [name]: value
          }
        })
    }, () => console.log(this.state.packingData));
  };

  /**
   * Makes the API call to post the newly created packing information the database
   * @param {object} packingData 
   * @param {integer} TripId 
   */
  handleCreateNew = event => {
    event.preventDefault();
    API.savePacking(this.state.packingData)
      .then(response => {
        this.setState({ packingData: {} });
        this.props.getPacking(this.props.TripId);
      })
      .catch(err => console.log(err));
  };

  /**
   * Function that edits the packing information and makes the API call to update the information
   * @param {function} toggleEdit
   * @param {object} editData - the packing information to be edited
   * @param {integer} props.id - database id number of the packing information to be edited
   * @param {integer} TripId
   */
  handleEdit = event => {
    event.preventDefault();
    this.props.toggleEdit(event);
    API.updatePacking(this.state.editData, this.props.id)
      .then(response => {
        this.props.getPacking(this.props.TripId);
      })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div className="packing-add">
        <label className="label-text" >Trip Name:</label>
        <Input
          xs={6} style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
          onChange={this.handleInputChange}
          name="name"
          value={this.state.packingData.name || ""}
          placeholder="Trip name"
        />
        <label className="label-text" >Need to Pack:</label>
        <TextArea
          xs={6} style={{ width: "70%", margin: "0 auto" }}
          onChange={this.handleInputChange}
          name="toPack"
          value={this.state.packingData.toPack || ""}
          placeholder="What do you need to pack..."
        />
        <label className="label-text" >Wish I had packed:</label>
        <TextArea
          xs={6} style={{ width: "70%", margin: "0 auto" }}
          onChange={this.handleInputChange}
          name="wishPack"
          value={this.state.packingData.wishPack || ""}
          placeholder="I wish I had packed..."
        />
        <label className="label-text" >Leave at home:</label>
        <TextArea
          xs={6} style={{ width: "70%", margin: "0 auto" }}
          onChange={this.handleInputChange}
          name="noPack"
          value={this.state.packingData.noPack || ""}
          placeholder="I can leave this at home..."
        />
        <button className="btn btn-lrg submit-btn" onClick={this.props.editing ? this.handleEdit : this.handleCreateNew}>Submit</button>
      </div>
    )
  }
};

export default PackingForm;