import React, { Component } from 'react';
import {Col, Panel} from 'react-bootstrap';
import PropsEditPanel from './PropsEditPanel';
import {step} from '../types/step';

export default class DataPanel extends Component {
  constructor(props){
    super(props);
  }
  handleChange(e){
    const {actions} = this.props;
    let target = this.props.slides.find((s) => s.active === true) || 
                 new step({id:'overview'});
    
    if (target.id !== 'overview')
    {
      let _name, _value;
      
      if (typeof(e) === 'string')
      {
        _name = 'content';
        _value = e;
      } 
      else
      {
        _name = e.target.name;
        _value = e.target.value;
      }
        
      actions.editStep(target, {name: _name, value: _value});
    }
  }
  
  render() {
    const cur = this.props.slides.find((s) => s.active === true) || 
                new step({content:'#OVERVIEW'});
    return (
      <Col md={3}>
        <Panel>
          <PropsEditPanel data={cur.data}
                          content={cur.content}
                          onChange={this.handleChange.bind(this)}/>
        </Panel>
      </Col>
    );
  }
}
