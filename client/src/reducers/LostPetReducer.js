const LostPetReducer = (state = [], action) => {
  switch(action.type){
    case 'GET_LOST_PETS':
      return action.lostPets;
    default:
      return state;
  }
}