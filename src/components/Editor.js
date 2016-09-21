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
      steps: []
    };
  }
  componentDidMount(){
    this.refs.joyride.start();
  }
  /*
  componentDidUpdate(prevProps, prevState) {
    if (!prevState.ready && this.state.ready) {
      this.refs.joyride.start();
    }
  }
  */
  
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
  
  addTooltip(data) {
    let joyride = this.refs.joyride;
    joyride.addTooltip(data);
  }
  
  render() {
    return (
      <div>
        <Joyride ref='joyride' 
                 steps={this.state.steps}
                 type={'continuous'}
                 showSkipButton={true}
                 showStepsProgress={true}
                 showOverlay={true}/>
                 
        <AddModal actions={this.props.actions}
                  addSteps={this.addSteps.bind(this)}/>
                         
        <EditPanel {...this.props}
                   addSteps={this.addSteps.bind(this)}/>
                   
        <StepsController actions={this.props.actions}
                         addSteps={this.addSteps.bind(this)}/>
                   
        <DownloadButton slides={this.props.slides}
                        addSteps={this.addSteps.bind(this)}/>
                         
        <ImportButton actions={this.props.actions}
                      addSteps={this.addSteps.bind(this)}/>
      </div>
    );
  }
}
