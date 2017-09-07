import { combineReducers } from 'redux';
import SticknotesReducer from './stickynotes'

const rootReducer = combineReducers({
  stickynotes: SticknotesReducer
});

export default rootReducer;
