import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Col, FormGroup, FormControl, ControlLabel, InputGroup, Panel} from 'react-bootstrap';

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
  }
  handleChange(e){
    console.log('hello '+e.target.value);
  }
  fieldGroup({_prop, _ref, _elm}, index){
    const {slides} = this.props;
    const _cur = slides.find((s) => s.active === true);
    
    return (
      <InputGroup key={index} >
        <InputGroup.Addon>{_prop}</InputGroup.Addon>
        <FormControl ref={_ref} 
                     type={_elm === 'content' ? 'textarea' : 'text'}
                     componentClass={_elm === 'content' ? 'textarea' : 'input'}
                     placeholder="Empty here"
                     value={ _elm === 'content' ? 
                            (_cur !== undefined ? _cur[_elm] : '') : 
                            (_cur !== undefined ? _cur.data[_elm] : 0) || 0}
                     onChange={this.handleChange.bind(this)}/>
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
