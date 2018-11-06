import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "redux-flow/stores/store";
import initApp from "tools/init";
import Routes from "routes";
import history from "routes/history";

const rootElement = global.document.getElementById("root");

const { store, persistor } = configureStore(history);

const renderApp = () =>
    render(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Routes history={history} />
            </PersistGate>
        </Provider>,
        rootElement
    );

initApp();
renderApp();
