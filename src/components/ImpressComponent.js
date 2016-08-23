import React, { Component } from 'react';

export default class ImpressComponent extends Component {
  constructor(props){
    super(props);
  }
  
  componentDidUpdate(){
    let api = impress();
    let steps = document.getElementsByClassName('step');
    let _elm = steps[steps.length-1];
    api.newStep(_elm);
    api.goto(_elm.id);
  }
  
  render() {
    const {slides} = this.props;
    return (
      <div id='impress'>
        <div>
        {
          slides.map((slide, index) =>
            <div key={index} id={slide.id || 'o-impressive-'+(index+1)} className='step'
                 data-x={slide.data.x} 
                 data-y={slide.data.y} 
                 data-z={slide.data.z}
                 data-scale={slide.data.scale}
                 data-rotate={slide.data.rotate}
                 data-rotate-x={slide.data.rotateX}
                 data-rotate-y={slide.data.rotateY}
                 data-rotate-z={slide.data.rotateZ}
                 dangerouslySetInnerHTML={{__html: slide.content}}>
            </div>)
        }
        </div>
      </div>
    );
  }
}