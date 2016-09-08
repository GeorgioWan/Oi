import React, { Component } from 'react';
import {Col, ButtonToolbar, ButtonGroup, Button, Glyphicon} from 'react-bootstrap';

export default class StepsController extends Component {
  constructor(props){
    super(props);
  }
  handleClick(e){
    let {actions} = this.props;
    let _api = impress();
    let target = e.target;
    
    while( target.nodeName !== 'BUTTON' && target !== document.documentElement)
      target = target.parentElement;
      
    if (target.name === 'overview')
    {
      _api.goto('overview');
      actions.activeStep('overview');
    }
    else 
    {
      if (target.name === 'prev')
        _api.prev();
      else if (target.name === 'next')
        _api.next();
      
      actions.activeStep(_api.getActiveStep().id);
    }
  }
  
  render() {
    return (
      <Col md={3} mdOffset={5}>
        <ButtonToolbar>
          <ButtonGroup>
            <Button name="prev" className='oi-btn oi-btn-ctl' onClick={this.handleClick.bind(this)}>
              <Glyphicon glyph='chevron-left' />
              <span> Prev</span>
            </Button>
            <Button name="overview" className='oi-btn oi-btn-ctl oi-btn-overview' onClick={this.handleClick.bind(this)}>OVERVIEW</Button>
            <Button name="next" className='oi-btn oi-btn-ctl' onClick={this.handleClick.bind(this)}>
              <span>Next </span>
              <Glyphicon glyph='chevron-right' />
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Col>
    );
  }
}
