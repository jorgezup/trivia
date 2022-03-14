import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';
import Reset from './styles/global/Reset';

ReactDOM.render(
  <Provider store={ store }>
    <Reset />
    <App />
  </Provider>,
  document.getElementById('root'),
);
