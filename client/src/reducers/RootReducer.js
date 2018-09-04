import {combineReducers} from 'redux';
import FoundPetReducer from './FoundPetReducer';
import FoundPetFormData from './FoundPetFormData';
import LostPetReducer from './LostPetReducer';
import LostPetFormData from './LostPetFormData';
import FoundPetComment from './FoundPetComment';
import FoundPetCommentsReducer from './FoundPetComments';

const RootReducer = combineReducers({
  foundPets: FoundPetReducer,
  foundPetFormData: FoundPetFormData,
  foundPetComment: FoundPetComment,
  foundPetComments: FoundPetCommentsReducer,
  lostPets: LostPetReducer,
  lostPetFormData: LostPetFormData,
  lostPetComment: LostPetComment,
  lostPetComments: LostPetCommentsReducer,
})

export default RootReducer;