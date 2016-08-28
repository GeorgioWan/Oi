export const ADD_SLIDE = 'ADD_SLIDE';
export const DEL_SLIDE = 'DEL_SLIDE';

export const CUR_SLIDE = 'CUR_SLIDE';
export const EDIT_SLIDE = 'EDIT_SLIDE';


export function addSlide() {
  return {
    type: ADD_SLIDE
  }
}

export function delSlide() {
  return {
    type: DEL_SLIDE
  }
}

export function curSlide(id) {
  return {
    type: CUR_SLIDE,
    id
  }
}

export function editSlide(slide) {
  return {
    type: EDIT_SLIDE,
    slide
  }
}