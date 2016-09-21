import React, { Component } from 'react';
import {ButtonToolbar, ButtonGroup, Button, Glyphicon} from 'react-bootstrap';

export default class StepsController extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    let {addSteps} = this.props;
    
    addSteps([
      {
        text: 'And you can contorl the CAMERA with <ul style="margin: 5px 0 0 30px;"><li><b style="color: #e5b560">Prev</b> - Back to the PREVIOUS step</li><li><b style="color: #e5b560">Next</b> - Go to the NEXT step</li><li><b style="color: #e5b560">OVERVIEW</b> - Jump to the step of OVERVIEW</li>',
        selector: '#oi-steps-controller',
        position: 'top',
        style: {
          backgroundColor: '#3e4852',
          borderRadius: 0,
          color: 'rgba(255,255,255,.8)',
          mainColor: '#a94442',
          beacon: {
            inner: '#a94442',
            outer: '#a94442'
          },
          skip: {
            color: 'rgba(255,255,255,.3)',
            fontSize: '13px'
          },
          width: '30rem'
        }
      }
    ]);
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
      <div id='oi-steps-controller'>
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
      </div>
    );
  }
}
