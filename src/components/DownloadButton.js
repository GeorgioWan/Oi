import React, { Component } from 'react';
import {Button, Glyphicon, Tooltip, OverlayTrigger} from 'react-bootstrap';

import {saveAs} from 'file-saver';

export default class DownloadButton extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    let {addSteps} = this.props;
    
    addSteps([
      {
        text: 'When you finish your SLIDE, you can Download your own <b style="color: #e5b560">[ Oi ]</b> SLIDE.',
        selector: '.oi-btn-download',
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
            color: 'rgba(255,255,255,.3)',
            fontSize: '13px'
          },
          width: '36rem'
        }
      }
    ]);
  }
  
  handleClick(e){
    
    // export as json
    //this.exportJSON();
    
    // download as HTML
    this.downloadHTML();
  }
  
  exportJSON(){
    let exp = JSON.stringify( this.props.slides, 
                              (key, value) => {
                                if (value)
                                  return value;
                                else
                                  return undefined;
                              }, 
                              2 // Indent
                            );
    let blob = new File([exp], {type: 'text/plain;charset=utf-8'});
    saveAs(blob, 'O-impressive.json');
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
		
		let title_text = 'O-impressive Slide';
		title.appendChild(doc.createTextNode(title_text));
		
		this.setStyle(head);
		
		this.createBody(doc_html, body);
		
		return doc_html;
  }
  setStyle(head){
    let style_font = document.getElementsByTagName('style')[1].cloneNode(true);
		let style_base = document.getElementsByTagName('style')[2].cloneNode(true);
		head.appendChild(style_font);
		head.appendChild(style_base);
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
    let _impress = document.createElement('div');
    _impress.id = 'impress';
    
    this.props.slides.forEach((s) => {
      if (s.id !== 'overview')
        _impress.appendChild(s.toElement());
    });
    
    let overview = this.props.slides[0].toElement();
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
      <OverlayTrigger placement="bottom" delayShow={800} overlay={toolTip}>
        <Button name="download" className="oi-btn oi-btn-o oi-btn-download oi-btn-download-pos" onClick={this.handleClick.bind(this)}>
          <Glyphicon glyph="download-alt" />
        </Button>
      </OverlayTrigger>
    );
  }
}
