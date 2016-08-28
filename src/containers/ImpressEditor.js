import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as allActions from '../actions/actions';
import { Editor } from '../components';

class ImpressEditor extends Component {
  render() {
    return (
      <Editor {...this.props} />
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