import {ADD_STEP, DEL_STEP, EDIT_STEP, ACTIVE_STEP} from '../actions/actionTypes';
import {step} from '../types/step';
//import {start} from '../example/start';
import {start} from '../example/demo-start';

const defaultState = start;

export function slides (state = [...defaultState], action) {
  switch (action.type) {
    case ADD_STEP:
      return newStep( state, action.slide);
      
    case DEL_STEP:
      return deleteStep( state );
      
    case EDIT_STEP:
      return editStep( state, action.target, action.data);
      
    case ACTIVE_STEP:
      return updateActive( state, action.id);
      
    default:
      return state;
  }
}

let _index = 1;

// 將 element init 成 impress step，並填回 style
function impressingStep(step, isNew){
  let _api = impress();
  let elem = step.toElement();
  
  isNew ? _api.newStep(elem) : _api.initStep(elem);
  step['style'] = elem.style;
}

// 更新 active 狀態
function updateActive(_oldState, _id){
  let newState = new Array();
  
  _oldState.forEach((s) => {
    s.active = s.id === _id ? true : false;
    newState.push(s);
  });
  
  return newState;
}

// 新增 slide element
function newStep(_oldState, _newSlide){
  let _move = _index++;
  let _step = new step({
    id: 'o-impress-' + _move,
    active: true,
    slide: _newSlide.slide,
    content: _newSlide.content,
    data: {
      x: parseInt(_newSlide.x),
      y: parseInt(_newSlide.y),
      z: parseInt(_newSlide.z),
      scale: parseInt(_newSlide.scale),
      rotate: parseInt(_newSlide.rotate),
      rotateX: parseInt(_newSlide.rotateX),
      rotateY: parseInt(_newSlide.rotateY),
      rotateZ: parseInt(_newSlide.rotateZ),
    }
  });
  
  impressingStep(_step, true);
  
  _oldState.push(_step);
  
  return updateActive(_oldState, _step.id);
}

// 刪除 slide element
function deleteStep(_oldState){
  let _api = impress();
  let _activeStep = _api.getActiveStep();
  let _cur = _oldState.findIndex((s) => s.id === _activeStep.id);
  let _overviewIndex = 0 ;
  
  
  if ( _cur === _overviewIndex )
    alert('Sorry, you can not delete #OVERVIEW.');
  else
  {
    _api.delStep(_cur);
    
    let _newState = _oldState.filter((value, index) => index !== parseInt((_cur)));
    let _prev = _cur - 1;
    let _prevStep = _newState[_prev].id;
    
    return updateActive(_newState, _prevStep);
  }
  
  return _oldState;
}

// 編輯 step element
function editStep(_oldState, target, data){
  let _api = impress();
  target = _oldState.findIndex((s) => s === target);
  
  if (data.name === 'content' || data.name === 'slide')
  {
    if (target === 0)
      alert('You can\'t change "'+ data.name + '" attribute of #OVERVIEW');
    else
      _oldState[target][data.name] = data.value;
  }
  else
  {
    _oldState[target].data[data.name] = data.value;
    
    if ( _oldState[target].data['rotate'] !== _oldState[target].data['rotateZ'] )
      _oldState[target].data['rotate'] = _oldState[target].data['rotateZ'];
    
    impressingStep(_oldState[target], false);
  }
  
  return [..._oldState];
}