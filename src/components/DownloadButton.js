import React, { Component } from 'react';
import {Button, Glyphicon, Tooltip, OverlayTrigger} from 'react-bootstrap';

import {saveAs} from 'file-saver';

import {step} from '../types/step';

export default class DownloadButton extends Component {
  constructor(props){
    super(props);
  }
  handleClick(e){
    this.downloadHTML();

    /* export json
    let exp = JSON.stringify(this.props.slides, null, 2);
    let blob = new File([exp], {type: 'text/plain;charset=utf-8'});
    saveAs(blob, 'O-impressive.json');
    */
    
    // parse json to obj
    //let imp = JSON.parse(exp);
  }
  
  downloadHTML(){
    let doc = this.createHtmlDoc(document.getElementsByTagName('html')[0]);
    
    let blob = new File(['<!DOCUMENT html>', doc.outerHTML], {type: 'text/plain;charset=utf-8'});
    saveAs(blob, 'O-impressive.html');
  }
  createHtmlDoc(html){
    let doc = document,
        doc_html = doc.createElement('html'), 
        head = doc_html.appendChild(doc.createElement('head')), 
        charset_meta = head.appendChild(doc.createElement('meta')), 
        title = head.appendChild(doc.createElement('title')), 
        body = doc_html.appendChild(doc.createElement('body'));
			
		charset_meta.setAttribute('charset', html.ownerDocument.characterSet);
		
		this.createBody(doc_html, body);
		
		let title_text = 'O-impressive Slide';
		title.appendChild(doc.createTextNode(title_text));
		
		return doc_html;
  }
  createBody(doc, body){
    body.className = 'impress-not-supported';
    
    // part of custom impress steps
    let _impress = this.createImpressSteps();
    body.appendChild(_impress);
    
    // part of script
    this.createScript(doc, body);
  }
  createImpressSteps(){
    let {slides} = this.props;
    let _impress = document.createElement('div');
    _impress.id = 'impress';
    
    slides.forEach((s) => {
      _impress.appendChild(s.toElement());
    });
    let overview = new step({
      id: 'overview',
      data: {
        x: 0,
        y: 0,
        scale: 6,
      }
    }).toElement();
    _impress.appendChild(overview);
    
    return _impress;
  }
  createScript(doc, body){
    let _impress = document.createElement('script'),
        _impress_init = document.createElement('script');
    
    _impress.src =  'http://cdnjs.cloudflare.com/ajax/libs/impress.js/0.5.3/impress.min.js';
    _impress_init.innerHTML = 'impress().init();';
    
		body.appendChild(_impress);
		body.appendChild(_impress_init);
  }
  
  render() {
    const toolTip = ( <Tooltip id={'downloadTooltip'}>Download your [ Oi ]</Tooltip> );
    
    return (
      <OverlayTrigger placement="left" delayShow={800} overlay={toolTip}>
        <Button name="download" className="oi-btn oi-btn-o oi-btn-download oi-btn-download-pos" onClick={this.handleClick.bind(this)}>
          <Glyphicon glyph="download-alt" />
        </Button>
      </OverlayTrigger>
    );
  }
}
