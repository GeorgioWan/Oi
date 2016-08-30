import React, { Component } from 'react';
import {Col, Panel} from 'react-bootstrap';
import PropsEditPanel from './PropsEditPanel';
import {step} from '../types/step';

export default class DataPanel extends Component {
  constructor(props){
    super(props);
  }
  handleChange(e){
    console.log('hello DataPanel');
  }
  
  render() {
    const cur = this.props.slides[0] || new step({});
    return (
      <Col md={3}>
        <Panel>
          <PropsEditPanel data={cur.data}
                          content={cur.content}
                          onChange={this.handleChange.bind(this)}/>
        </Panel>
      </Col>
    );
  }
}
