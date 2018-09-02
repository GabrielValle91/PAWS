import { resetLostPetForm } from './LostPetForm'

const setLostPets = lostPets => {
  return {
    type: 'GET_LOST_PETS',
    lostPets
  }
}

const addLostPet = lostPet => {
  return {
    type: 'CREATE_LOST_PET',
    lostPet
  }
}

export const getLostPets = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/lost_pets')
    .then(response => response.json())
    .then(lostPets => dispatch(setLostPets(lostPets)))
  }
}

export const createLostPet = lostPet => {
  console.log(lostPet)
  return dispatch => {
    return fetch('http://localhost:3001/api/lost_pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({lost_pet: lostPet})
    })
      .then(response => response.json())
      .then(lostPet => {
        console.log(lostPet)
        dispatch(addLostPet(lostPet))
        dispatch(resetLostPetForm())
      })
      .catch(error => console.log(error))
  }
}