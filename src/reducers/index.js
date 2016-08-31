import {combineReducers} from 'redux';
import {slides} from './slides';
import {curStep} from './curStep';

const rootReducer = combineReducers({
  slides, curStep
});

export default rootReducer;