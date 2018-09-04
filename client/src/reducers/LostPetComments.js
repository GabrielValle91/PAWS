const LostPetCommentsReducer = (state = [], action) => {
  switch(action.type){
    case 'GET_LOST_PET_COMMENTS':
      return action.lostPetComments;
    case 'CREATE_LOST_PET_COMMENT':
      return state.concat(action.lostPetcomment);
    default:
      return state;
  }
}