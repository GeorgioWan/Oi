export const ADD_SLIDE = 'ADD_SLIDE';
export const DEL_SLIDE = 'DEL_SLIDE';

export const SET_CUR_STEP = 'SET_CUR_STEP';
export const EDIT_STEP = 'EDIT_STEP';


export function addSlide(slide) {
  return {
    type: ADD_SLIDE,
    slide
  };
}

export function delSlide() {
  return {
    type: DEL_SLIDE
  };
}

export function setCurStep(step) {
  return {
    type: SET_CUR_STEP,
    step
  };
}

export function editStep(step) {
  return {
    type: EDIT_STEP,
    step
  };
}