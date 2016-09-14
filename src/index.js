// React
import React from 'react';
import {render} from 'react-dom';
import {OiMain, ImpressRoot, ImpressEditor, OiFooter} from './containers';
// redux
import store from './store';
// react-redux
import {Provider} from 'react-redux';

// scss styles
require('./styles/scss/oi_variables.scss');
require('./styles/scss/oi_animate.scss');
require('./styles/scss/oi_editor.scss');
require('./styles/scss/_base.scss');
require('./styles/scss/react-toggle.scss');

render( <OiMain />,
        document.getElementById('oi-main')
      );

render( <Provider store={store}>
          <ImpressRoot />
        </Provider>,
        document.getElementById('impress-root')
      );

render( <Provider store={store}>
          <ImpressEditor />
        </Provider>,
        document.getElementById('impress-editor')
      );
      
render( <OiFooter />,
        document.getElementById('oi-footer')
      );