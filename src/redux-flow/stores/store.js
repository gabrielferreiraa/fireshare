import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { DEV_TOOLS } from "tools/constants";
import rootReducers from "redux-flow/reducers/root-reducers";
import middlewares from "redux-flow/stores/middlewares";

const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = applyMiddleware(...middlewares)(createStore)(
    persistedReducer,
    DEV_TOOLS
);

const persistor = persistStore(store);

export { store, persistor };
