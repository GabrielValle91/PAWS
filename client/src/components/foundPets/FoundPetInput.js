import React, { Component } from 'react';

class FoundPetInput extends Component {
  constructor(props){
    super(props);
    this.state={
      animal_type: '',
      city: '',
      state: '',
      area: '',
      gender: '',
      firstImage: '',
      secondImage: '',
      thirdImage: ''
    }
  }

  fileChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.files[0]
    })
  }

  handleSubmit = e => {
    e.preventDefault();

  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render(){
    const states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME",
    "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI",
    "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
    const stateList = states.map(state => {
      return (
        <option>{state}</option>
      )
    })
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <span className="FoundPetInputField">
            Animal Type: <select name="animal_type" value={this.state.animal_type} onChange={this.handleChange}>
              <option></option>
              <option>Dog</option>
              <option>Cat</option>
              <option>Bird</option>
              <option>Other</option>
            </select>
          </span>
          <span className="FoundPetInputField">
            Gender: <select name="gender" value={this.state.gender} onChange={this.handleChange}>
              <option></option>
              <option>male</option>
              <option>female</option>
            </select>
          </span>
          <span className="FoundPetInputField">
            City: <input type="text" name="city" value={this.state.city} onChange={this.handleChange} />
          </span>
          <span className="FoundPetInputField">
            State: <select name="state" value={this.state.state} onChange={this.handleChange}>
              <option></option>
              {stateList}
            </select>
          </span>
          <span className="FoundPetInputField">
            Area of town: <input type="text" name="area" value={this.state.area} onChange={this.handleChange} />
          </span>
          <br />
          <input type="file" name="firstImage" onChange={this.FileChangeHandler} />
          <input type="file" name="secondImage" onChange={this.FileChangeHandler} />
          <input type="file" name="thirdImage" onChange={this.FileChangeHandler} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default FoundPetInput;