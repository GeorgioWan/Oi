// React
import React from 'react';
import {render} from 'react-dom';
import {OiMain} from './containers';
// redux
import store from './store';
// react-redux
import {Provider} from 'react-redux';

// scss styles
require('./styles/scss/oi_editor.scss');
require('./styles/scss/_base.scss');
require('./styles/scss/react-toggle.scss');

render( <Provider store={store}>
          <OiMain />
        </Provider>,
        document.getElementById('oi-main')
      );