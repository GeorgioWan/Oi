import React, { Component } from 'react';
import {Row, Col, FormGroup, FormControl, ControlLabel, InputGroup} from 'react-bootstrap';
import TinymceEditor from './TinymceEditor';

export default class PropsEditPanel extends Component {
  constructor(props){
    super(props);
  }
  handleChange(e) {
    if (this.props.onChange)
      this.props.onChange(e);
  }
  
  render() {
    const {data, content} = this.props;
    const inputGroup = (_title, _name ) => (
      <FormGroup>
        <InputGroup>
          <InputGroup.Addon>{_title}</InputGroup.Addon>
          <FormControl name={_name}
                       type={'text'}
                       componentClass={'input'}
                       placeholder="Set value here"
                       onChange={this.handleChange.bind(this)}
                       value={data[_name]}/>
        </InputGroup>
      </FormGroup>
    );
    return (
      <form>
        <Row>
          <Col md={6}>
            <ControlLabel>Position & Scale</ControlLabel>
            { inputGroup('Position X', 'x') }
            { inputGroup('Position Y', 'y') }
            { inputGroup('Position Z', 'z') }
            { inputGroup('Scale Size', 'scale') }
          </Col>
          <Col md={6}>
            <ControlLabel>Rotation</ControlLabel>
            { inputGroup('Rotation', 'rotate') }
            { inputGroup('Rotation X', 'rotateX') }
            { inputGroup('Rotation Y', 'rotateY') }
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ControlLabel>Content</ControlLabel>
            <TinymceEditor content={content}
                           onChange={this.handleChange.bind(this)}/>
          </Col>
        </Row>
      </form>
    );
  }
}
