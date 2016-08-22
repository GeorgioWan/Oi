import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as allActions from '../actions/actions';
import { Editor } from '../components';

class ImpressEditor extends Component {
  render() {
    const {actions, slides} = this.props;
    return (
      <Editor actions={actions} slides={slides} />
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(allActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImpressEditor);