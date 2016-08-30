import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';
import PropsEditPanel from './PropsEditPanel';

const defaultSlide = {
  x: 0,
  y: 0,
  z: 0,
  scale:   1,
  rotate:  0,
  rotateX: 0,
  rotateY: 0,
  content: '<p>Create Your Own Content!</p>'
};

export default class AddModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      ...defaultSlide
    };
  }
  initState(){
    this.setState(defaultSlide);
  }
  handleClick(e){
    if (e.target.name === 'open')
      this.setState({show: true});
    else if (e.target.name === 'add')
    {
      let {actions} = this.props;
      actions.addSlide(this.state);
      
      this.initState();
      this.setState({show: false});
    }
    
  }
  handleChange(e){
    if (typeof(e) === 'string')
      this.setState({ content: e });
    else
      this.setState({ [e.target.name]: e.target.value });
  }
  contentChange(content){
    this.setState({content});
  }
  
  render() {
    const close = () => this.setState({show: false});
    return (
      <span>
        <Button name="open" onClick={this.handleClick.bind(this)}>ADD</Button>
        
        <Modal show={this.state.show}
               onHide={close}
               container={this}
               enforceFocus={false}
               aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">New Slide</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PropsEditPanel data={this.state}
                            content={this.state.content}
                            onChange={this.handleChange.bind(this)}/>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle='link' 
                    bsSize='sm'
                    onClick={close} 
                    style={{color: 'gray'}}>
              Cancel
            </Button>
            <Button name="add" 
                    bsStyle='success'
                    onClick={this.handleClick.bind(this)}>
              Done!
            </Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}
