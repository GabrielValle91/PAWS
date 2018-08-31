const initialState = {
  animal_type: '',
  city: '',
  state: '',
  area: '',
  gender: '',
  firstImage: '',
  secondImage: '',
  thirdImage: '',
  user_id: 1
}
const FoundPetFormData = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_FOUND_PET_DATA':
      return action.foundPetFormData;
    case 'RESET_FOUND_PET_DATA':
      return initialState;
    default:
      return state
  }
}

export default FoundPetFormData;