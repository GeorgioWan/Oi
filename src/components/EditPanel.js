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
      isOverview: false,
    };
  }
  componentDidMount(){
    let {addSteps} = this.props;
    
    setTimeout(() => {
      addSteps([
        {
          text: 'Then you can Edit current STEP\'s <b style="color: #e5b560">Position</b>, <b style="color: #e5b560">Rotation</b> or <b style="color: #e5b560">Content</b> ... etc',
          selector: '.oi-btn-edit',
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
            width: '35rem'
          }
        }
      ]);
    }, 6100);
  }
  componentWillReceiveProps(nextProps){
    let target = nextProps.slides.find((s) => s.active === true);
    
    if (target.id === 'overview')
      this.setState({
        isEdit: this.state.isEdit,
        isOverview: true
      });
    else
      this.setState({
        isEdit: this.state.isEdit,
        isOverview: false
      });
  }
  handleChange(e){
    let target = this.props.slides.find((s) => s.active === true) || 
                 new step({id:'overview'});
    
    if (typeof(e) === 'string')
    {
      if (target.id === 'overview')
        alert('You can\'t edit #OVERVIEW\'s content.');
      else
        this.updateState(target, 'content', e);
    }
    else
      this.updateState(target, e.target.name, e.target.name === 'slide' ? e.target.checked : e.target.value);
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
      let _v = this.props.slides.find((s) => s.active === true);
      if (_v.id === 'overview'){
        this.setState({
          isEdit: !this.state.isEdit,
          isOverview: true
        });
      }
      else
        this.setState({
          isEdit: !this.state.isEdit,
          isOverview: false
        });
    }
  }
  
  updateState(target, name, value){
    const {actions} = this.props;
    
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
            <PropsEditPanel step={cur}
                            onChange={this.handleChange.bind(this)}
                            onClick={this.handleClick.bind(this)}/>
          </Panel>
        </div>
        <div className={'oi-editpanel-content' + ((this.state.isEdit && !this.state.isOverview) ? ' oi-editpanel-editing' : ' oi-editpanel-not-editing')}>
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
