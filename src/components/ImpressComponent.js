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
          <div id='overview' className='step' data-x='1000' data-y='1000' data-scale='3'></div>
        {
          slides.map((slide, index) =>
            <div key={index} id={slide.id || 'o-impressive-'+(index+1)} className='step'
                 data-x={slide.data.x} 
                 data-y={slide.data.y} 
                 data-z={slide.data.z}
                 data-scale={slide.data.scale}
                 data-rotate={slide.data.rotate.value}
                 data-rotate-x={slide.data.rotate.x}
                 data-rotate-y={slide.data.rotate.y}
                 data-rotate-z={slide.data.rotate.z}
                 dangerouslySetInnerHTML={{__html: slide.content}}>
            </div>)
        }
        </div>
      </div>
    );
  }
}