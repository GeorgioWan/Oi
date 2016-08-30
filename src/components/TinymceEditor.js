import React, { Component } from 'react';
import TinyMCE from 'react-tinymce';

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
                 plugins: 'autolink link image lists print preview',
                 toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | link image',
               }}
               onChange={this.handleEditorChange.bind(this)}
      />
    );
  }
}