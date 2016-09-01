import React, { Component } from 'react';
import TinyMCE from '@realgeeks/react-tinymce';

export default class TinymceEditor extends Component {
  constructor(props){
    super(props);
  }
  handleEditorChange(e) {
    if (this.props.onChange)
      this.props.onChange(e.target.getContent());
  }
  
  render() {
    const {content} = this.props;
    return (
      <TinyMCE content={content}
               config={{
                 plugins: 'autolink link image lists print preview textcolor colorpicker',
                 toolbar: 'undo redo | bold italic forecolor backcolor | alignleft aligncenter alignright | link image',
               }}
               onChange={this.handleEditorChange.bind(this)}
      />
    );
  }
}