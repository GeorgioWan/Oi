import {SET_CUR_STEP} from '../actions/actions';
import {step} from '../types/step';

let defaultStep = new step({content:'#OVERVIEW'});

export function curStep (state = defaultStep, action) {
  switch (action.type) {
    case SET_CUR_STEP:
      return setCurrentStep(action.step);
    default:
      return state;
  }
}

function setCurrentStep(step){
  let _api = impress();
  if(step === -1)
  {
    _api.goto('overview');
    return defaultStep;
  }
  else
    return step;
}