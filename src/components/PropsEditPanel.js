import React, { Component } from 'react';

import {Modal, Button, ControlLabel} from 'react-bootstrap';
import Toggle from 'react-toggle';

import PropsItem from './PropsItem';

export default class PropsEditPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false
    };
  }
  handleChange(e) {
    if (this.props.onChange)
      this.props.onChange(e);
  }
  handleClick(e){
    if (this.props.onClick){
      this.props.onClick(e);
      this.setState({
        show: false
      });
    }
  }
  
  render() {
    const {step} = this.props;
    const close = () => this.setState({show: false});
    const open = () => this.setState({show: true});
    
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
        <Button name="del" className="oi-btn oi-btn-fill oi-btn-del" onClick={open}>DELETE</Button>
        
        <Modal show={this.state.show}
               onHide={close}
               enforceFocus={false}
               aria-labelledby="delete-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="delete-modal-title">Delete Step</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span>Are you sure you wanna <span style={{padding: '2px 5px', borderRadius: '4px', color: '#fff', backgroundColor: '#a94442'}}>DELETE</span> this STEP ?</span>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle='link' 
                    onClick={close} 
                    style={{color: 'gray'}}>
              cancel
            </Button>
            <Button name="del" 
                    className="oi-btn oi-btn-del"
                    onClick={this.handleClick.bind(this)}>
              DELETE!
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    );
  }
}
