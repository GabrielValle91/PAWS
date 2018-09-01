import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLostPetFormData } from '../../actions/LostPetForm';
import { createLostPet } from '../../actions/LostPets';

class LostPetInput extends Component{
  fileChangeHandler = event => {
    const {name} = event.target;
    console.log(event.target.files[0]);
    const currentLostPetFormData = Object.assign({}, this.props.lostPetFormData, {
      [name]: event.target.files[0]
    })
    this.props.updateLostPetFormData(currentLostPetFormData);
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createLostPet(this.props.lostPetFormData);
  }

  handleChange = event => {
    const {name, value} = event.target;
    const currentLostPetFormData = Object.assign({}, this.props.lostPetFormData, {
      [name]: value
    })
    this.props.updateLostPetFormdata(currentLostPetFormData);
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
    const {animal_type, gender, breed, city, state, personality, chipped} = this.props.lostPetFormData;
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
              <option>male</option>
              <option>female</option>
            </select>
          </div>
          <div className="FoundPetInputField">
            Breed: <input type="text" name="breed" value={breed} onChange={this.handleChange} />
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
            Personality: <input type="text" name="personality" value={personality} onChange={this.handleChange} />
          </div>
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default LostPetInput;