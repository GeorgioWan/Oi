import rootReducer from '../reducers';
import {createStore} from 'redux';

const store = createStore(
                rootReducer, 
                window.devToolsExtension ? window.devToolsExtension() : undefined
              );

export default store;