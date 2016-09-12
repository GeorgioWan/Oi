import React, { Component } from 'react';
import {Button, Glyphicon, Tooltip, OverlayTrigger} from 'react-bootstrap';

export default class ImportButton extends Component {
  constructor(props){
    super(props);
  }
  handleChange(e){
    let file = e.target.files[0];
    let fReader = new FileReader();
    let parser = new DOMParser();
    
    fReader.onload = (e) => {
      let doc = parser.parseFromString(e.target.result, 'text/html');
      console.log(doc);
    };
    
    if (file.type === 'text/html')
      fReader.readAsText(file);
    else
    {
      alert('Please import correct file(*.html)');
      e.target.value = '';
    }
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
