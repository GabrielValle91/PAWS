import { resetFoundPetForm } from './FoundPetForm';

//Action Creators
const setFoundPets = foundPets => {
  return {
    type: 'GET_FOUND_PETS',
    foundPets
  }
}

const addFoundPet = foundPet => {
  return{
    type: 'CREATE_FOUND_PET',
    foundPet
  }
}

// Async Actions
export const getFoundPets = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/found_pets')
    .then(response => response.json())
    .then(foundPets => dispatch(setFoundPets(foundPets)))
  }
}

export const createFoundPet = foundPet => {
  console.log(foundPet)
  return dispatch => {
    return fetch('http://localhost:3001/api/found_pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({found_pet: foundPet})
    })
      .then(response => response.json())
      .then(foundPet => {
        console.log(foundPet)
        dispatch(addFoundPet(foundPet))
        dispatch(resetFoundPetForm())
      })
      .catch(error => console.log(error))
  }
}