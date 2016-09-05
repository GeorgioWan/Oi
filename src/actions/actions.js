export const ADD_STEP = 'ADD_STEP';
export const DEL_STEP = 'DEL_STEP';
export const EDIT_STEP = 'EDIT_STEP';
export const ACTIVE_STEP = 'ACTIVE_STEP';


export function addStep(slide) {
  return {
    type: ADD_STEP,
    slide
  };
}

export function delStep() {
  return {
    type: DEL_STEP
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