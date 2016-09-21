import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as allActions from '../actions/actionCreator';

import {ImpressComponent, Editor} from '../components';

class OiMain extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <header id='oi-loading'>
          <div className='oi-loading-title'>
            <div className='oi-loading-welcome'>Welcome to</div>
            <div className='oi-loading-oi'><b>[ Oi ]</b></div>
          </div>
        </header>
        
        <div id='oi-body'>
          <div id='impress-root'>
            <ImpressComponent {...this.props} />
          </div>
          <div id='impress-editor'>
            <Editor {...this.props} />
          </div>
          <div id='oi-footer'>
            <div className="oi-footer">
              <div>© 2016 <i className="glyphicon glyphicon-heart"></i> OAwan</div>
              <a className="github-button" href="https://github.com/georgiowan/Oi/fork" data-icon="octicon-repo-forked" aria-label="Fork georgiowan/Oi on GitHub">Fork</a>
              <a className="github-button" href="https://github.com/georgiowan/Oi" data-icon="octicon-star" data-count-href="/georgiowan/Oi/stargazers" data-count-api="/repos/georgiowan/Oi#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star georgiowan/Oi on GitHub">Star</a>
            </div>
          </div>
        </div>
      </div>
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
)(OiMain);