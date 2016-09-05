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
                 height: 150,
                 menubar: 'file edit insert view',
                 plugins: 'autolink link image lists print preview textcolor colorpicker media',
                 toolbar1: 'undo redo | styleselect',
                 toolbar2: 'bold italic forecolor backcolor | alignleft aligncenter alignright | link image media'
               }}
               onChange={this.handleEditorChange.bind(this)}
      />
    );
  }
}