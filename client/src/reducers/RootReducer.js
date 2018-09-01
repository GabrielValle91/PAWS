import {combineReducers} from 'redux';
import FoundPetReducer from './FoundPetReducer';
import FoundPetFormData from './FoundPetFormData';
import LostPetReducer from './LostPetReducer';
import LostPetFormData from './LostPetFormData';

const RootReducer = combineReducers({
  foundPets: FoundPetReducer,
  foundPetFormData: FoundPetFormData,
  lostPets: LostPetReducer,
  lostPetFormData: LostPetFormData
})

export default RootReducer;