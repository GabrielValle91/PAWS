const initialState = {
  comment: '',
  lost_pet_id: 0,
  user_id: 1
}

const LostPetComment = (state = initialState, action) => {
  switch(action.type){
    case 'UPDATE_LOST_PET_COMMENT':
      return action.lostPetcomment;
    case 'RESET_LOST_PET_COMMENT':
      return initialState;
    default:
      return state;
  }
}

export default LostPetComment;