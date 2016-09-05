import React, { Component } from 'react';
import {step} from '../types/step';

export default class ImpressComponent extends Component {
  constructor(props){
    super(props);
  }
  
  componentDidUpdate(){
    this.updateFromImpress();
  }

  handleClick(e){
    let {actions, slides} = this.props;
    let target = e.target;
    
    while( !target.classList.contains('step') &&
           !target.classList.contains('active') &&
            target !== document.documentElement) {
      target = target.parentNode;          
    }
    
    if (target !== document.documentElement)
    {
      target = slides.find((s) => s.id === target.id);
      actions.activeStep(target.id);
    }
  }
  
  updateFromImpress(){
    let _api = impress();
    let _activeStep = _api.getActiveStep();
    
    _api.goto(_activeStep.id);
  }
  
  render() {
    const {slides} = this.props;

    return (
      <div id='impress'>
        <div>
        <div id='overview' className='step' data-x='0' data-y='0' data-scale='6'></div>
        {
          slides.map((slide, index) => {
            return (
              <div className='step' key={index}
                   id={slide.id}
                   data-x={slide.data.x || 0}
                   data-y={slide.data.y || 0} 
                   data-z={slide.data.z || 0}
                   data-scale={slide.data.scale || 1}
                   data-rotate={slide.data.rotate || 0}
                   data-rotate-x={slide.data.rotateX || 0}
                   data-rotate-y={slide.data.rotateY || 0}
                   data-rotate-z={slide.data.rotateZ || slide.data.rotate || 0}
                   dangerouslySetInnerHTML={{__html: slide.content}}
                   onClick={this.handleClick.bind(this)}
                   style={{ position: slide.style ? slide.style.position : '',
                            transform: slide.style ? slide.style.transform : ''
                   }}>
              </div>
            );
          })
        }
        </div>
      </div>
    );
  }
}