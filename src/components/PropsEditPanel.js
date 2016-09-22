import React, { Component } from 'react';

import {Button, ControlLabel} from 'react-bootstrap';
import Toggle from 'react-toggle';

import PropsItem from './PropsItem';

export default class PropsEditPanel extends Component {
  constructor(props){
    super(props);
  }
  handleChange(e) {
    if (this.props.onChange)
      this.props.onChange(e);
  }
  handleClick(e){
    if (this.props.onClick)
      this.props.onClick(e);
  }
  
  render() {
    const {step} = this.props;
    
    return (
      <form>
        <ControlLabel>Slide Card</ControlLabel>
        <i className="oi-question-slidecard glyphicon glyphicon-question-sign"></i>
        <div className='oi-toggle'>
          <Toggle name='slide'
                  checked={step.slide || false}
                  onChange={this.handleChange.bind(this)}/>
        </div>
        <hr className="oi-divider" />
        <ControlLabel>Position</ControlLabel>
        <PropsItem attr={'x'} 
                   data={step.data} 
                   onChange={this.handleChange.bind(this)}/>
        <PropsItem attr={'y'} 
                   data={step.data} 
                   onChange={this.handleChange.bind(this)}/>
        <PropsItem attr={'z'} 
                   data={step.data} 
                   onChange={this.handleChange.bind(this)}/>
        <hr className="oi-divider" />
        <ControlLabel>Rotation</ControlLabel>
        <PropsItem title={'x'}
                   attr={'rotateX'} 
                   data={step.data} 
                   onChange={this.handleChange.bind(this)}/>
        <PropsItem title={'y'}
                   attr={'rotateY'} 
                   data={step.data} 
                   onChange={this.handleChange.bind(this)}/>
        <PropsItem title={'z'}
                   attr={'rotateZ'} 
                   data={step.data} 
                   onChange={this.handleChange.bind(this)}/>
        <hr className="oi-divider" />           
        <ControlLabel>Scale</ControlLabel>
        <PropsItem attr={'scale'} 
                   data={step.data} 
                   onChange={this.handleChange.bind(this)}/>
        <hr className="oi-divider" />           
        <Button name="del" className="oi-btn oi-btn-fill oi-btn-del" onClick={this.handleClick.bind(this)}>DELETE</Button>
      </form>
    );
  }
}
