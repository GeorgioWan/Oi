import React from 'react';

export class step {
  constructor({
    id='',
    active=false,
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
    this.content= content;
    this.data = {...data};
  }
  
  toElement(){
    let elem = document.createElement('div');
    elem.className = 'step';
    elem.id = this.id;
    elem.dataset.x = this.data.x;
    elem.dataset.y = this.data.y;
    elem.dataset.z = this.data.z;
    elem.dataset.scale = this.data.scale;
    elem.dataset.rotate = this.data.rotate;
    elem.dataset.rotateX = this.data.rotateX;
    elem.dataset.rotateY = this.data.rotateY;
    elem.dataset.rotateZ = this.data.rotateZ;
    elem.innerHTML = this.content;
    
    return elem;
  }
}