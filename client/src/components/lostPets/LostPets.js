import React, { Component } from 'react';
import LostPet from './LostPet';

class LostPets extends Component {
  render(){
    const {lostPets} = this.props;
    const lostPetsList = lostPets.map(lostPet => {
      return (
        <LostPet
          key={lostPet.id}
          lostPet={lostPet}
        />
      )
    })

    return(
      <div>
        {lostPetsList}
      </div>
    )
  }
}

export default LostPets;