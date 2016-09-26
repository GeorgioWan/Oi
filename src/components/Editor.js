import React, { Component } from 'react';

import AddModal from './AddModal';
import StepsController from './StepsController';
import EditPanel from './EditPanel';
import DownloadButton from './DownloadButton';
import ImportButton from './ImportButton';

import Joyride from 'react-joyride';

export default class Editor extends Component {
  constructor(props){
    super(props);
    this.state = {
      steps: [],
      ready: false
    };
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        ready: true
      });
    }, 6000);
    
    // add tooltip
    setTimeout(() => {
      this.addTooltip(
        {
          text: 'Set your STEP to <b style="color: #e5b560">NORMAL TYPE</b> or <b style="color: #e5b560">SLIDE CARD TYPE</b>.',
          selector: '.oi-question-slidecard',
          position: 'top',
          event: 'hover',
          style: {
            backgroundColor: '#3e4852',
            borderRadius: 0,
            color: 'rgba(255,255,255,.8)',
            mainColor: '#a94442',
            width: '30rem'
          }
        }
      );
    }, 6200);
  }
  
  componentDidUpdate (prevProps, prevState) {
    if (!prevState.ready && this.state.ready) {
        this.refs.joyride.start();
    }
  }
  
  // Add teaching steps into joyride
  addSteps(steps){
    let joyride = this.refs.joyride;
    
    if (!Array.isArray(steps))
      steps = [steps];
      
    if (!steps.length)
      return false;
      
    this.setState((currentState) => {
      currentState.steps = currentState.steps.concat(joyride.parseSteps(steps));
      return currentState;
    });
  }
  
  // Add tooltip into joyride( but not use in anywhere now XDD)
  addTooltip(data) {
    let joyride = this.refs.joyride;
    joyride.addTooltip(data);
  }
  
  // callback for joyride
  callback(data) {
    if (data.type === 'step:before'){
      this.props.actions.activeStep(0);
      impress().goto(0);
    }
    else if (data.type === 'finished')
    {
      let _goto = this.props.slides.length > 1 ? 1 : 0;
      this.props.actions.activeStep(_goto);
      impress().goto(_goto);
    }
  }
  
  render() {
    return (
      <div>
        <Joyride ref='joyride' 
                 steps={this.state.steps}
                 type={'continuous'}
                 keyboardNavigation={false}
                 showSkipButton={true}
                 showStepsProgress={true}
                 showOverlay={true}
                 callback={this.callback.bind(this)}/>
                 
        <AddModal actions={this.props.actions}
                  addSteps={this.addSteps.bind(this)}/>
                         
        <EditPanel {...this.props}
                   addSteps={this.addSteps.bind(this)}/>
                   
        <StepsController {...this.props}
                         addSteps={this.addSteps.bind(this)}/>
                   
        <DownloadButton slides={this.props.slides}
                        addSteps={this.addSteps.bind(this)}/>
                         
        <ImportButton actions={this.props.actions}
                      addSteps={this.addSteps.bind(this)}/>
      </div>
    );
  }
}
