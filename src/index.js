import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'redux-flow/stores/configure-store';
import { BrowserRouter as Router } from 'react-router-dom';

import { style } from 'style/default';
import App from 'containers/app';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');
const store = configureStore();

const renderApp = Component => (
    render(
        <Provider store={store}>
            <Router>
                <Component />
            </Router>
        </Provider>, 
        rootElement)
);

renderApp(App);
style();
registerServiceWorker();
