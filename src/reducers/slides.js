import {ADD_SLIDE, DEL_SLIDE} from '../actions/actions';
import {step} from '../types/step';

const overview = new step({
  id: 'overview',
  data: {
    x: 1000,
    y: 1000,
    scale: 3
  }
}).toElement();

export function slides (state = [overview], action) {
  switch (action.type) {
    case ADD_SLIDE:
      return [
        ...state,
        action.slide
      ];
    case DEL_SLIDE:
      return state.filter((value, index) => index !== parseInt(action.id));
    default:
      return state;
  }
}