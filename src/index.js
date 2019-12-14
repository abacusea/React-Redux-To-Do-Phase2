import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import todoApp from './reducers/index'
import App from './App';
import * as serviceWorker from './serviceWorker';

{ /* Use compose just for enabling the redux devTools Extension */}

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(todoApp)

{ /* Provider component from react-redux library is responsive to connect 
everything from react and redux. */}

ReactDOM.render(<Provider store={store}> <App /> </Provider>,
 document.getElementById('root'));

serviceWorker.unregister();



