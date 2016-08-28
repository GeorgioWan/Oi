import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import DataPanel from './DataPanel';
import {step} from '../types/step';

export default class Editor extends Component {
  constructor(props){
    super(props);
    this.api = impress();
  }
  newSlide(actions){
    actions.addSlide();
  }
  deleteSlide(actions){
    actions.delSlide();
  }
  handleClick(e){
    let {actions} = this.props;
    
    if (e.target.name === 'add')
      this.newSlide(actions);
    else if (e.target.name === 'del')
      this.deleteSlide(actions);
    else if (e.target.name === 'overview')
      this.api.goto('overview');
  }
  
  render() {
    return (
      <div>
        <Button name="add" onClick={this.handleClick.bind(this)}>ADD</Button>
        <Button name="del" onClick={this.handleClick.bind(this)}>DEL</Button>
        <Button name="overview" onClick={this.handleClick.bind(this)}>Overview</Button>
        <DataPanel {...this.props}/>
      </div>
    );
  }
}
