import React, { Component } from 'react';
import LostPet from './LostPet'

class LostPets extends Component {
  render(){
    const {lostPets} = this.props;
    const lostPetList = lostPets.map(lostPet => {
      return (
        <LostPet
          key={lostPet.id}
          lostPet={lostPet}
        />
      )
    })
    return(
      <div>
        {lostPetList}
      </div>
    )
  }
}

export default LostPets;