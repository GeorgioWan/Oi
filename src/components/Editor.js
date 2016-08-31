import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import DataPanel from './DataPanel';
import AddModal from './AddModal';

export default class Editor extends Component {
  constructor(props){
    super(props);
  }
  deleteSlide(actions){
    actions.delSlide();
  }
  handleClick(e){
    let {actions} = this.props;
    
    if (e.target.name === 'del')
      this.deleteSlide(actions);
    else if (e.target.name === 'overview')
      actions.activeStep(-1);
      
  }
  handleChange(e){
    console.log(e);
  }
  
  render() {
    return (
      <div>
        <AddModal actions={this.props.actions}/>
        <Button name="del" onClick={this.handleClick.bind(this)}>DEL</Button>
        <Button name="overview" onClick={this.handleClick.bind(this)}>Overview</Button>
        <DataPanel {...this.props}/>
      </div>
    );
  }
}
