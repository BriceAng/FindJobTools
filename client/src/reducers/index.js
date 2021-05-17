import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import offerReducer from './offer.reducer';

export default combineReducers({
    userReducer,
    offerReducer,
})