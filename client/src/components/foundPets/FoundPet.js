import React from 'react';
import './FoundPets.css'

const FoundPet = ({ foundPet }) => (
  <div className="FoundPetCard">
    <p className="FoundPetCardContent">{foundPet.gender} - {foundPet.animal_type}</p>
    <img src={foundPet.image_url} alt={"pet pic"} className="FoundPetImage"/>
    <p className="FoundPetCardContent">Location: {foundPet.city}, {foundPet.state}</p>
  </div>
)

export default FoundPet;