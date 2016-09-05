// React
import React from 'react';
import {render} from 'react-dom';
import {Impress, ImpressEditor} from './containers';
// redux
import store from './store';
// react-redux
import {Provider} from 'react-redux';

// scss styles
require('./styles/scss/animate.scss');
require('./styles/scss/oi_variables.scss');
require('./styles/scss/oi_editor.scss');
require('./styles/scss/_base.scss');


// store subscribe
let unsubscribe = store.subscribe(() => {
  //console.log(store.getState());
});

render( <Provider store={store}>
          <Impress />
        </Provider>,
        document.getElementById('impress-root')
      );

render( <Provider store={store}>
          <ImpressEditor />
        </Provider>,
        document.getElementById('impress-editor')
      );