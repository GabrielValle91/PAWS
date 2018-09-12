import React, { Component } from 'react';
import {connect} from 'react-redux';
import { updateFoundPetFormData } from '../../actions/FoundPetForm';
import { createFoundPet } from '../../actions/FoundPets';

class FoundPetInput extends Component {

  fileChangeHandler = event => {
    const {name} = event.target;
    console.log(event.target.files[0])
    const currentFoundPetFormData = Object.assign({}, this.props.foundPetFormData, {
      [name]: event.target.files[0]
    })
    this.props.updateFoundPetFormData(currentFoundPetFormData);
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('A')
    this.props.createFoundPet(this.props.foundPetFormData)
    console.log('B')
  }

  handleChange = event => {
    const {name, value} = event.target;
    const currentFoundPetFormData = Object.assign({}, this.props.foundPetFormData, {
      [name]: value
    })
    this.props.updateFoundPetFormData(currentFoundPetFormData);
  }

  render(){
    const states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME",
    "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI",
    "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
    const stateList = states.map((state,idx) => {
      return (
        <option key={idx}>{state}</option>
      )
    })
    const {animal_type, gender, city, state, area, image_url} = this.props.foundPetFormData;
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="FoundPetInputField">
            Animal Type: <select name="animal_type" value={animal_type} onChange={this.handleChange}>
              <option></option>
              <option value="Dog">Dog</option>
              <option>Cat</option>
              <option>Bird</option>
              <option>Other</option>
            </select>
          </div>
          <div className="FoundPetInputField">
            Gender: <select name="gender" value={gender} onChange={this.handleChange}>
              <option></option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="FoundPetInputField">
            City: <input type="text" name="city" value={city} onChange={this.handleChange} />
          </div>
          <div className="FoundPetInputField">
            State: <select name="state" value={state} onChange={this.handleChange}>
              <option></option>
              {stateList}
            </select>
          </div>
          <div className="FoundPetInputField">
            Area of town: <input type="text" value={area} name="area" onChange={this.handleChange} />
          </div>
          <div className="FoundPetInputField">
            Image Url: <input type="text" value={image_url} name="image_url" onChange={this.handleChange} />
          </div>
          <br />
          {/* <input type="file" name="pet_image" value={this.props.pet_image} onChange={this.fileChangeHandler} /> */}
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    foundPetFormData: state.foundPetFormData
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateFoundPetFormData: () => {dispatch(updateFoundPetFormData())},
//   }
// }

export default connect(mapStateToProps, {
  updateFoundPetFormData,
  createFoundPet
})(FoundPetInput);