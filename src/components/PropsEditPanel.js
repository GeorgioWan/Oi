import React, { Component } from 'react';
import {Button, ControlLabel} from 'react-bootstrap';
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
    const {data} = this.props;
    return (
      <form>
        <ControlLabel>Position</ControlLabel>
        <PropsItem attr={'x'} 
                   data={data} 
                   onChange={this.handleChange.bind(this)}/>
        <PropsItem attr={'y'} 
                   data={data} 
                   onChange={this.handleChange.bind(this)}/>
        <PropsItem attr={'z'} 
                   data={data} 
                   onChange={this.handleChange.bind(this)}/>
        <hr className="oi-divider" />
        <ControlLabel>Rotation</ControlLabel>
        <PropsItem title={'x'}
                   attr={'rotateX'} 
                   data={data} 
                   onChange={this.handleChange.bind(this)}/>
        <PropsItem title={'y'}
                   attr={'rotateY'} 
                   data={data} 
                   onChange={this.handleChange.bind(this)}/>
        <PropsItem title={'z'}
                   attr={'rotateZ'} 
                   data={data} 
                   onChange={this.handleChange.bind(this)}/>
        <hr className="oi-divider" />           
        <ControlLabel>Scale</ControlLabel>
        <PropsItem attr={'scale'} 
                   data={data} 
                   onChange={this.handleChange.bind(this)}/>
        <hr className="oi-divider" />           
        <Button name="del" className="oi-btn oi-btn-fill oi-btn-del" onClick={this.handleClick.bind(this)}>DELETE</Button>
      </form>
    );
  }
}
