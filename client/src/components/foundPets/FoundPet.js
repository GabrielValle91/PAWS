import React from 'react';
import './FoundPets.css'

const FoundPet = ({ foundPet }) => (
  <div className="FoundPetCard">
    <p>{foundPet.gender} - {foundPet.animal_type}</p>
    <p>Location: {foundPet.city}, {foundPet.state}</p>
  </div>
)

export default FoundPet;