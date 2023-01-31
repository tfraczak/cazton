import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import './App.scss';
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
window.getState = store.getState;
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
