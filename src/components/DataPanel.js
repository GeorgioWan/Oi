import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Col, Button, FormGroup, FormControl, ControlLabel, InputGroup, Panel} from 'react-bootstrap';
import {step} from '../types/step';

class data {
  constructor(prop, ref, elm){
    this._prop = prop;
    this._ref = ref;
    this._elm = elm;
  }
}

export default class DataPanel extends Component {
  constructor(props){
    super(props);
    this.api = impress();
  }
  getData(datas){
    let _cur = document.getElementsByClassName('step active')[0];
    let _Data = {};
    datas.map((d, i) => {
      _Data[d._ref] = ReactDOM.findDOMNode(this.refs[d._ref]);
      if ( d._elm === 'content' )
        _Data[d._ref].value = _cur.innerHTML;
      else
        _Data[d._ref].value = _cur.dataset[d._elm] || 0;
    });
  }
  loadData(pos, scale, rot, content){
    this.getData(pos);
    this.getData(scale);
    this.getData(rot);
    this.getData(content);
    
  }
  fieldGroup({_prop, _ref, _elm}, index){
    return (
      <InputGroup key={index} >
        <InputGroup.Addon>{_prop}</InputGroup.Addon>
        <FormControl ref={_ref} 
                     type={_elm === 'content' ? 'textarea' : 'text'}
                     componentClass={_elm === 'content' ? 'textarea' : 'input'}
                     placeholder="Empty here" />
      </InputGroup>
    );
  }
  generateInputGroup(datas){
    return datas.map((data, index)=>{
      return (
        this.fieldGroup({...data}, index)
      );
    });
  }
  
  
  render() {
    const scale   = [ new data('data-scale', 'stepDataScale', 'scale') ];
    const pos     = [ new data('data-x', 'stepDataX', 'x'), 
                      new data('data-y', 'stepDataY', 'y'),
                      new data('data-z', 'stepDataZ', 'z')];
    const rot     = [ new data('data-rotate', 'stepDataRotate', 'rotate'), 
                      new data('data-rotate-x', 'stepDataRotateX', 'rotateX'),
                      new data('data-rotate-y', 'stepDataRotateY', 'rotateY'),
                      new data('data-rotate-z', 'stepDataRotateZ', 'rotateZ')];
    const content = [ new data('content', 'stepContent', 'content') ];
    
    return (
      <Col md={2}>
        <Panel>
          <Button name="load" onClick={this.loadData.bind(this, pos, scale, rot, content)}>LOAD</Button>
          <form>
            <FormGroup>
              <ControlLabel>Position & Scale</ControlLabel>
              { this.generateInputGroup(pos) }
              { this.generateInputGroup(scale) }
              
              <ControlLabel>Rotate</ControlLabel>
              { this.generateInputGroup(rot) }
              
              <ControlLabel>Content</ControlLabel>
              { this.generateInputGroup(content) }
            </FormGroup>
          </form>
        </Panel>
      </Col>
    );
  }
}
