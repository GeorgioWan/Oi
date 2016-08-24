import React from 'react';

export class step {
  constructor({
    id='', 
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
    this.content= content;
    this.data = {...data};
    this.index = 0;
  }
  
  toElement(){
    return (
      <div id={this.id || 'o-impressive-'+(this.index+1)} className='step'
           data-x={this.data.x} 
           data-y={this.data.y} 
           data-z={this.data.z}
           data-scale={this.data.scale}
           data-rotate={this.data.rotate}
           data-rotate-x={this.data.rotateX}
           data-rotate-y={this.data.rotateY}
           data-rotate-z={this.data.rotateZ}
           dangerouslySetInnerHTML={{__html: this.content}}>
      </div>
    );
  }
}