export const ADD_SLIDE = 'ADD_SLIDE';
export const DEL_SLIDE = 'DEL_SLIDE';


export function addSlide(slide) {
  return {
    type: ADD_SLIDE,
    slide
  }
}

export function delSlide(id) {
  return {
    type: DEL_SLIDE,
    id
  }
}