import * as actions from './actionTypes';

export function addStep(step) {
  return {
    type: actions.ADD_STEP,
    step
  };
}

export function delStep() {
  return {
    type: actions.DEL_STEP
  };
}

export function editStep(target, data) {
  return {
    type: actions.EDIT_STEP,
    target,
    data
  };
}

export function activeStep(id) {
  return {
    type: actions.ACTIVE_STEP,
    id
  };
}

export function importSlides(slides) {
  return {
    type: actions.IMPORT_SLIDES,
    slides
  };
}