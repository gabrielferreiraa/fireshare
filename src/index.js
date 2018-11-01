import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'redux-flow/stores/configure-store';
import { initApp } from 'tools/init';

import { HashRouter as Router } from 'react-router-dom';
import App from 'containers/app';

const rootElement = global.document.getElementById('root');
const store = configureStore();

const renderApp = () => render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement,
);

initApp();
renderApp();
