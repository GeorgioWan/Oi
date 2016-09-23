import React, { Component } from 'react';
import {Modal, ControlLabel, FormControl, Button, Glyphicon, Tooltip, OverlayTrigger} from 'react-bootstrap';

import {saveAs} from 'file-saver';

export default class DownloadButton extends Component {
  constructor(props){
    super(props);
    this.state={
      show: false,
      filename: '',
      author: ''
    };
  }
  componentDidMount(){
    let {addSteps} = this.props;
    
    setTimeout(() => {
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
    }, 6100);
  }
  
  handleClick(e){
    if ( e.target.name === 'download' )
    {
      // download as HTML
      this.downloadHTML();
      this.setState({show: false});
    }
  }
  handleChange(e){
    this.setState({ 
      [e.target.name]: e.target.value 
    });
  }
  
  downloadHTML(){
    let doc = this.createHtmlDoc(document.getElementsByTagName('html')[0]);
    let _filename = (this.state.filename !== '' ? this.state.filename : 'Oh!impressive') + '.html';
    
    let blob = new File(['<!DOCUMENT html>', doc.outerHTML], {type: 'text/plain;charset=utf-8'});
    saveAs(blob, _filename);
  }
  createHtmlDoc(html){
    let doc = document,
        doc_html = doc.createElement('html'), 
        head = doc_html.appendChild(doc.createElement('head')), 
        charset_meta = head.appendChild(doc.createElement('meta')), 
        title = head.appendChild(doc.createElement('title')), 
        body = doc_html.appendChild(doc.createElement('body'));
			
		charset_meta.setAttribute('charset', html.ownerDocument.characterSet);
		
		let title_text = this.state.filename !== '' ? this.state.filename : 'Oh!impressive Slide';
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
    // take a stamp
    this.createStamp(doc, body);
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
  createStamp(doc, body){
    let _stamp = document.createElement('div');
    var _author = '<b>' + (this.state.author !== '' ? this.state.author : '[ Oi ]') + '</b><span>&hearts;</span>';
    var _powered = 'Powered by ' + '<a href="https://oawan.me/Oi" target="_blank">[ Oi ]</a>';
        
    _stamp.id = 'oi-stamp';
    _stamp.innerHTML = _author + _powered;
    
    body.appendChild(_stamp);
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
    const close = () => this.setState({show: false});
    const open = () => this.setState({show: true});
    const toolTip = ( <Tooltip id={'downloadTooltip'}>Download your [ Oi ]</Tooltip> );
    
    return (
      <div>
        <OverlayTrigger placement="bottom" delayShow={800} overlay={toolTip}>
          <Button className="oi-btn oi-btn-o oi-btn-download oi-btn-download-pos" 
                  onClick={open}>
            <Glyphicon glyph="download-alt" />
          </Button>
        </OverlayTrigger>
        
        <Modal show={this.state.show}
               onHide={close}
               container={this}
               enforceFocus={false}
               bsSize={'sm'}
               aria-labelledby="download-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="download-modal-title">Download your [Oi]</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <ControlLabel>Author</ControlLabel>
              <FormControl name={'author'}
                           type="text"
                           value={this.state.author}
                           placeholder="Your name"
                           onChange={this.handleChange.bind(this)}/>
                           
              <ControlLabel>File Name</ControlLabel>
              <FormControl name={'filename'}
                           type="text"
                           value={this.state.filename}
                           placeholder="Your filename"
                           onChange={this.handleChange.bind(this)}/>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle='link' 
                    onClick={close} 
                    style={{color: 'gray'}}>
              cancel
            </Button>
            <Button name="download" 
                    className="oi-btn oi-btn-ctl"
                    onClick={this.handleClick.bind(this)}>
              Download
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
