import React, { Component } from 'react';

export default class ImpressComponent extends Component {
  constructor(props){
    super(props);
  }
  
  componentDidUpdate(prevProps){
    let _api = impress();
    let p_length = prevProps.slides.length;
    let c_length = this.props.slides.length;
    
    if (p_length < c_length) // Add slide
    {
      let steps = document.getElementsByClassName('step');
      let _elm = steps[steps.length-1];
      _api.newStep(_elm);
    }
  }
  
  render() {
    const {slides} = this.props;
    return (
      <div id='impress'>
        <div>
        {
          slides.map((slide, index) =>
            slide
          )
        }
        </div>
      </div>
    );
  }
}