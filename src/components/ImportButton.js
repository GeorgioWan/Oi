import React, { Component } from 'react';
import {Button, Glyphicon, Tooltip, OverlayTrigger} from 'react-bootstrap';
import {step} from '../types/step';

export default class ImportButton extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    let {addSteps} = this.props;
    
    setTimeout(() => {
      addSteps([
      {
        text: 'The last thing, you can also Import <b style="color: #e5b560">[ Oi ]</b> SLIDE from local, have fun <i class="glyphicon glyphicon-heart"></i>',
        selector: '.oi-btn-import',
        position: 'bottom',
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
            display: 'none'
          },
          width: '35rem'
        }
      }
    ]);
    }, 6100);
  }
  handleChange(e){
    this.importFile(e.target);
  }
  
  importFile(target){
    let file = target.files[0];
    let fReader = new FileReader();
    let parser = new DOMParser();
    
    fReader.onload = (e) => {
      let doc = parser.parseFromString(e.target.result, 'text/html');
      
      if (doc.getElementById('impress'))
        this.parseSteps(doc);
      else
      {
        alert('Please import correct file (should have an impress id in your html).');
        target.value = '';
      }
    };
    
    if (file.type === 'text/html')
      fReader.readAsText(file);
    else
    {
      alert('Please import correct file (*.html).');
      target.value = '';
    }
  }
  parseSteps(doc){
    let steps = [...doc.getElementsByClassName('step')];
    let newSlides = new Array();
      
    if ( steps.length > 0 )
    {
      steps.forEach((s) => {
        s = new step({
          id: s.id,
          slide: s.classList.contains('slide'),
          content: s.innerHTML,
          data: {
            x: s.dataset.x || 0,
            y: s.dataset.y || 0,
            z: s.dataset.z || 0,
            scale: s.dataset.scale || 1,
            rotate: s.dataset.rotate || 0,
            rotateX: s.dataset.rotateX || 0,
            rotateY: s.dataset.rotateY || 0,
            rotateZ: s.dataset.rotateZ || 0
          },
          style: s.style
        });
        
        if (s.id === 'overview')
          newSlides.splice(0, 0, s);
        else
          newSlides.push(s);
      });
    }
    
    this.props.actions.importSlides(newSlides);
    
  }

  render() {
    const toolTip = ( <Tooltip id={'downloadTooltip'}>Import your [ Oi ]</Tooltip> );
    
    return (
      <OverlayTrigger placement="bottom" delayShow={800} overlay={toolTip}>
        <Button className='btn oi-btn oi-btn-o oi-btn-import oi-btn-import-pos'>
          <Glyphicon glyph="open" />
          <input type='file' id='file' onChange={this.handleChange.bind(this)}/>
        </Button>
      </OverlayTrigger>
    );
  }
}
