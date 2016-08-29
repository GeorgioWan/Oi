import {ADD_SLIDE, DEL_SLIDE, CUR_SLIDE} from '../actions/actions';
import {step} from '../types/step';

export function slides (state = [], action) {
  switch (action.type) {
    case ADD_SLIDE:
      return newSlide(state, action.slide);
    case DEL_SLIDE:
      return deleteSlide(state);
    case CUR_SLIDE:
      return updateActive(state, action.id);
    default:
      return state;
  }
}

let _index = 1;

// 更新 active 狀態
function updateActive(_oldState, _id){
  let _api = impress();
  let newState = new Array();
  
  _oldState.forEach((s) => {
    s.active = s.id === _id ? true : false;
      
    newState.push(s);
  });
  
  if (_id === -1)
    _api.goto('overview');
    
  return newState;
}

// 新增 slide element
function newSlide(_oldState, _newSlide){
  let _api  = impress();
  let _move = _index++;
  let _step = new step({
    id: 'o-impress-' + _move,
    active: true,
    content: _newSlide.content,
    data: {
      x: parseInt(_newSlide.x),
      y: parseInt(_newSlide.y),
      z: parseInt(_newSlide.z),
      scale: parseInt(_newSlide.scale),
      rotate: parseInt(_newSlide.rotate),
      rotateX: parseInt(_newSlide.rotateX),
      rotateY: parseInt(_newSlide.rotateY),
      rotateZ: parseInt(_newSlide.rotate),
    }
  });
  
  let _solve = _step.toElement();
  _api.newStep(_solve);
  _step['style'] = _solve.style;
  _oldState.push(_step);
  
  return updateActive(_oldState, _step.id);
}

// 刪除 slide element
function deleteSlide(_oldState){
  let _api = impress();
  let _cur = _oldState.findIndex((s) => s.active === true);
  
  if ( _cur === -1 )
    alert('Sorry, you could not delete #OVERVIEW.');
  else
  {
    let _prev = _cur - 1;
    let _impressTarget = _cur + 1; // cus 'slidesData[0]' in impress is 'overview' in this case
    
    _api.delStep(_impressTarget);
    
    let _newState = _oldState.filter((value, index) => index !== parseInt((_cur)));
    
    if ( _prev !== -1 )
      return updateActive(_newState, _newState[_prev].id);
    else
      return _newState;
  }
  
  return _oldState;
}