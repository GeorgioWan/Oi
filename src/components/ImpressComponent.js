import React, { Component } from 'react';
import {step} from '../types/step';

export default class ImpressComponent extends Component {
  constructor(props){
    super(props);
  }

  handleClick(e){
    let {actions} = this.props;
    let _elm = e.target.parentNode;
    actions.curSlide(_elm.id);
  }
  
  render() {
    const {slides} = this.props;

    return (
      <div id='impress'>
        <div>
          <div id='overview' className='step' data-x='1000' data-y='1000' data-scale='3'></div>
        {
          slides.map((slide, index) =>

            <div className='step' key={index}
                 id={slide.id || 'o-impressive-'+(slide.index+1)}
                 data-x={slide.data.x} 
                 data-y={slide.data.y} 
                 data-z={slide.data.z}
                 data-scale={slide.data.scale}
                 data-rotate={slide.data.rotate}
                 data-rotate-x={slide.data.rotateX}
                 data-rotate-y={slide.data.rotateY}
                 data-rotate-z={slide.data.rotateZ}
                 dangerouslySetInnerHTML={{__html: slide.content}}
                 onClick={this.handleClick.bind(this)}
                 style={{ position: slide.style.position,
                          transform: slide.style.transform
                 }}>
            </div>
          )
        }
        </div>
      </div>
    );
  }
}