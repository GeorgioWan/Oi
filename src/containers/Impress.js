import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ImpressComponent } from '../components';

class Impress extends Component {
  render() {
    const {slides} = this.props;
    return (
      <ImpressComponent slides={slides} />
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps
)(Impress);