import React, { Component } from 'react';
import {Col, Panel} from 'react-bootstrap';
import PropsEditPanel from './PropsEditPanel';

export default class DataPanel extends Component {
  constructor(props){
    super(props);
  }
  handleChange(e){
    console.log('hello DataPanel');
  }
  
  render() {
    const cur = this.props.curStep;
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
