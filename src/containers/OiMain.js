import React, { Component } from 'react';

export default class OiMain extends Component {
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
          <div id='impress-root'></div>
          <div id='impress-editor'></div>
          <div id='oi-footer'></div>
        </div>
      </div>
    );
  }
}