import {combineReducers} from 'redux';
import FoundPetReducer from './FoundPetReducer';
import FoundPetFormData from './FoundPetFormData';

const RootReducer = combineReducers({
  foundPets: FoundPetReducer,
  foundPetFormData: FoundPetFormData
})

export default RootReducer;