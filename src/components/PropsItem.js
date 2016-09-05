import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup} from 'react-bootstrap';

export default class PropsItem extends Component {
  constructor(props){
    super(props);
  }
  handleChange(e) {
    if (this.props.onChange)
      this.props.onChange(e);
  }
  
  render() {
    const {data, title, attr} = this.props;

    return (
      <FormGroup>
        <InputGroup>
          { (attr === 'scale' && !title) ? '' : <InputGroup.Addon>{title || attr}</InputGroup.Addon> }
          <FormControl name={attr}
                       type={'text'}
                       componentClass={'input'}
                       placeholder="Set value here"
                       onChange={this.handleChange.bind(this)}
                       value={data[attr] || (attr === 'scale' ? 1 : 0)}/>
        </InputGroup>
      </FormGroup>
    );
  }
}
