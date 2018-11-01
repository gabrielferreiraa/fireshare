import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "redux-flow/stores/store";
import initApp from "tools/init";

import { HashRouter as Router } from "react-router-dom";
import App from "containers/app";

const rootElement = global.document.getElementById("root");

const renderApp = () =>
    render(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <App />
                </Router>
            </PersistGate>
        </Provider>,
        rootElement
    );

initApp();
renderApp();
