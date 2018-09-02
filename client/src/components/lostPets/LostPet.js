import React from 'react';
import './LostPets.css';

const LostPet = ({ lostPet }) => {
  <div className="LostPetCard">
    <p>{lostPet.gender} - {lostPet.animal_type}</p>
    <p>Location: {lostPet.city}, {lostPet.state}</p>
  </div>
}

export default LostPet;