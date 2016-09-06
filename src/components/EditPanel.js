import React, { Component } from 'react';
import {Panel, ControlLabel, Button, Glyphicon, Tooltip, OverlayTrigger } from 'react-bootstrap';
import PropsEditPanel from './PropsEditPanel';
import TinymceEditor from './TinymceEditor';
import {step} from '../types/step';

export default class EditPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEdit: false,
      //active: '',
      //content: ''
    };
  }
  /*
  componentWillMount(){
    let target = this.props.slides.find((s) => s.active === true) || 
                 new step({id:'overview', content:'#OVERVIEW'});
    this.setState({
      active: target.id,
      content: target.content
    });
  }
  componentWillReceiveProps(nextProps){
    let np = nextProps.slides.find((s) => s.active === true) || 
             new step({id:'overview', content:'#OVERVIEW'});
    
    if (this.state.active !== np.id)
    {
      this.state.active = np.id;
      this.setState({
        active: np.id,
        content: np.content
      });
    }
  }*/
  componentWillReceiveProps(nextProps){
    let target = nextProps.slides.find((s) => s.active === true);
    
    if (!target)
      this.setState({isEdit: false});
  }
  handleChange(e){
    let target = this.props.slides.find((s) => s.active === true) || 
                 new step({id:'overview'});
    
    if (target.id !== 'overview')
    {
      if (typeof(e) === 'string')
        this.updateState(target, 'content', e);
      else
        this.updateState(target, e.target.name, e.target.value);
    }
  }
  handleClick(e){
    let {actions} = this.props;
    let target = e.target;
    
    while( target.nodeName !== 'BUTTON' && target !== document.documentElement)
      target = target.parentElement;
      
    if (target.name === 'del')
      actions.delStep();
    else if (target.name === 'edit')
    {
      let _v = this.props.slides.findIndex((s) => s.active === true);
      if (_v === -1){
        alert('Please selecet or create a \'step\' first.');
      }
      else
        this.setState({isEdit: !this.state.isEdit});
    }
    /*
    else if (target.name === 'update')
    {
      let _target = this.props.slides.find((s) => s.active === true);
      
      if (_target)
        actions.editStep(_target, {name: 'content', value: this.state.content});
      else
        alert('You can\'t edit #OVERVIEW');
    }
    */
  }
  
  updateState(target, name, value){
    const {actions} = this.props;
    /*
    if (name === 'content')
      this.setState({content: value});
    else
      actions.editStep(target, {name: name, value: value});
    */
    actions.editStep(target, {name: name, value: value});
  }
  
  render() {
    const cur = this.props.slides.find((s) => s.active === true) || 
                new step({content:'#OVERVIEW'});
    const toolTip = ( <Tooltip id={'editTooltip'}>Edit Step</Tooltip> );
    
    return (
      <div className='oi-editpanel'>
        <OverlayTrigger placement="left" delayShow={800} overlay={toolTip}>
          <Button name="edit" className="oi-btn oi-btn-o oi-btn-edit oi-btn-edit-pos" onClick={this.handleClick.bind(this)}><Glyphicon glyph="edit" /></Button>
        </OverlayTrigger>
        <div className={'oi-editpanel-props' + (this.state.isEdit ? ' oi-editpanel-editing' : ' oi-editpanel-not-editing')}>
          <Panel>
            <PropsEditPanel data={cur.data}
                            onChange={this.handleChange.bind(this)}
                            onClick={this.handleClick.bind(this)}/>
          </Panel>
        </div>
        <div className={'oi-editpanel-content' + (this.state.isEdit ? ' oi-editpanel-editing' : ' oi-editpanel-not-editing')}>
          <Panel>
            <div className='oi-tinymce-editor'>
              <ControlLabel>Content</ControlLabel>
              <TinymceEditor content={cur.content}
                             onChange={this.handleChange.bind(this)}/>
            </div>
          </Panel>
        </div>
      </div>
    );
  }
}
