export const ADD_SLIDE = 'ADD_SLIDE';
export const DEL_SLIDE = 'DEL_SLIDE';
export const EDIT_STEP = 'EDIT_STEP';
export const ACTIVE_STEP = 'ACTIVE_STEP';


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

export function editStep(target, data) {
  return {
    type: EDIT_STEP,
    target,
    data
  };
}

export function activeStep(id) {
  return {
    type: ACTIVE_STEP,
    id
  };
}