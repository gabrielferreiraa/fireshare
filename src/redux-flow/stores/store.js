import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { DEV_TOOLS } from "tools/constants";
import createRootReducer from "redux-flow/reducers/root-reducers";
import configureMiddleware from "./middlewares";

const persistConfig = {
    key: "root",
    storage
};

export default history => {
    const middlewares = configureMiddleware(history);

    const persistedReducer = persistReducer(
        persistConfig,
        createRootReducer(history)
    );

    const store = createStore(
        persistedReducer,
        compose(
            applyMiddleware(...middlewares),
            DEV_TOOLS
        )
    );

    const persistor = persistStore(store);

    return { store, persistor };
};
