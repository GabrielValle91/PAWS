const setLostPets = lostPets => {
  return {
    type: 'GET_LOST_PETS',
    lostPets
  }
}


export const getLostPets = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/lost_pets')
    .then(response => response.json())
    .then(lostPets => dispatch(setLostPets(lostPets)))
  }
}