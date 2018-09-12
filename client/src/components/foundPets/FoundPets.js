import React, { Component } from 'react';
import FoundPet from './FoundPet';

// class FoundPets extends Component {
//   handleClick = () => {
//     alert("good")
//   }
//   render(){
//     const {foundPets} = this.props;
//     const foundPetsList = foundPets.map(foundPet => {
//       return (
//         <FoundPet
//           key={foundPet.id}
//           foundPet={foundPet}
//         />
//       )
//     });

//     return(
//       <div>
//         {foundPetsList}
//       </div>
//     )
//   }
// }

const FoundPets = ({foundPets}) => {
  const foundPetsList = foundPets.map(foundPet => {
    return(
      <FoundPet
            key={foundPet.id}
            foundPet={foundPet}
          />
    )
  })
  return(
    <div>
      {foundPetsList}
    </div>
  )
}

export default FoundPets;