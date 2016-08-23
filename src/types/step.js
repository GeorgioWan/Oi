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
  }
}