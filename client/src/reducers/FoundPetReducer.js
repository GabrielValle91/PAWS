const FoundPetReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_FOUND_PETS':
      return action.foundPets;
    case 'CREATE_FOUND_PET':
      return state.concat(action.foundPet);
      
    // case 'CREATE_FOUND_PET_COMMENT':
    //   // let foundPet = state.filter(pet => pet.id === action.foundPetComment.found_pet.id);
    //   // // debugger
    //   // let comment = action.foundPetComment
    //   // delete comment.found_pet
    //   // return  foundPet[0].found_pet_comments.concat(comment);
    //   return state;
    default:
      return state;
  }
}

export default FoundPetReducer;