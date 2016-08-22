import {ADD_SLIDE, DEL_SLIDE} from '../actions/actions';

export function slides (state = [], action) {
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