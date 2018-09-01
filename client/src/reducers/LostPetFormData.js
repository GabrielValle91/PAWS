const initialState = {
  animal_type: '',
  name: '',
  gender: '',
  breed: '',
  city: '',
  state: '',
  personality: '',
  chipped: false,
  user_id: 1
}
const LostPetFormData = (state = initialState, action ) => {
  switch(action.type){
    
    default:
      return state;
  }
}

export default LostPetFormData;