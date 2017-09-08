import { combineReducers } from 'redux';
import stickynotesReducer from './stickynotes_Reducer'

const rootReducer = combineReducers({
  stickynotes: stickynotesReducer
});

export default rootReducer;
