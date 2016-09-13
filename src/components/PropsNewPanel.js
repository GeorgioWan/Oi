import React, { Component } from 'react';

import {Row, Col,  ControlLabel} from 'react-bootstrap';
import Toggle from 'react-toggle';

import TinymceEditor from './TinymceEditor';
import PropsItem from './PropsItem';

export default class PropsNewPanel extends Component {
  constructor(props){
    super(props);
  }
  handleChange(e) {
    if (this.props.onChange)
      this.props.onChange(e);
  }
  
  render() {
    const {data, content} = this.props;
    return (
      <form>
        <Row>
          <Col md={6}>
            <ControlLabel>Position</ControlLabel>
            <PropsItem attr={'x'} 
                       data={data} 
                       onChange={this.handleChange.bind(this)}/>
            <PropsItem attr={'y'} 
                       data={data} 
                       onChange={this.handleChange.bind(this)}/>
            <PropsItem attr={'z'} 
                       data={data} 
                       onChange={this.handleChange.bind(this)}/>
            <PropsItem title={'Scale'}
                       attr={'scale'}
                       data={data} 
                       onChange={this.handleChange.bind(this)}/>
          </Col>
          <Col md={6}>
            <ControlLabel>Rotation</ControlLabel>
            <PropsItem title={'x'} 
                       attr={'rotateX'} 
                       data={data} 
                       onChange={this.handleChange.bind(this)}/>
            <PropsItem title={'y'} 
                       attr={'rotateY'} 
                       data={data} 
                       onChange={this.handleChange.bind(this)}/>
            <PropsItem title={'z'} 
                       attr={'rotateZ'} 
                       data={data} 
                       onChange={this.handleChange.bind(this)}/>
                       <div className='oi-toggle'>
              <span>Slide Card</span>
              <Toggle name='slide'
                      defaultChecked={data.slide}
                      onChange={this.handleChange.bind(this)}/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className='oi-tinymce-editor'>
              <ControlLabel>Content</ControlLabel>
              <TinymceEditor content={content}
                             onChange={this.handleChange.bind(this)}/>
            </div>
          </Col>
        </Row>
      </form>
    );
  }
}
