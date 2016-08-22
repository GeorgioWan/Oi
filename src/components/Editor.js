import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {step} from '../types/step';

export default class Editor extends Component {
  constructor(props){
    super(props);
    this.api = impress();
  }
  handleClick(e){
    let {actions} = this.props;
    
    if (e.target.name === 'add')
    {
      let _step = new step();
      let _move = document.getElementsByClassName('step').length;
      
      _step.data.x = _move*300;
      _step.content = '<div>New Slide</div>';
      actions.addSlide(_step);
    }
    else if (e.target.name === 'del')
      actions.delSlide(e.target.id);
    else if (e.target.name === 'overview')
      this.api.goto('overview');
  }
  
  render() {
    return (
      <div>
        <Button name="add" onClick={this.handleClick.bind(this)}>ADD</Button>
        <Button name="del" onClick={this.handleClick.bind(this)}>DEL</Button>
        <Button name="overview" onClick={this.handleClick.bind(this)}>Overview</Button>
      </div>
    );
  }
}