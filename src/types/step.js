import React from 'react';

export class step {
  constructor({
    id='',
    active=false,
    slide=false,
    content='', 
    data={
      x: 0,
      y: 0,
      z: 0,
      scale: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: ''
    }
  }){
    this.id= id;
    this.active= active;
    this.slide= slide;
    this.content= content;
    this.data = {...data};
  }
  
  toElement(){
    let elem = document.createElement('div');
    elem.className = this.slide ? 'step slide' : 'step';
    elem.id = this.id;
    elem.dataset.x = this.data.x || 0;
    elem.dataset.y = this.data.y || 0;
    elem.dataset.z = this.data.z || 0;
    elem.dataset.scale = this.data.scale || 1;
    elem.dataset.rotate = this.data.rotate || '';
    elem.dataset.rotateX = this.data.rotateX || 0;
    elem.dataset.rotateY = this.data.rotateY || 0;
    elem.dataset.rotateZ = this.data.rotateZ || 0;
    elem.innerHTML = this.content;
    
    return elem;
  }
}