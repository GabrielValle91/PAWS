import React, { Component } from 'react';
import './FoundPets.css'

class FoundPet extends Component {
  render(){
    const { foundPet } = this.props;

    return (
      <div className="FoundPetCard">
        <p>{foundPet.gender} - {foundPet.animal_type}</p>
        <p>Location: {foundPet.city}, {foundPet.state}</p>
      </div>
    )
  }
}

export default FoundPet;