import { applyMiddleware, createStore } from 'redux';
import { DEV_TOOLS } from 'tools/constants';
import rootReducers from 'redux-flow/reducers/root-reducers';
import middlewares from 'redux-flow/stores/middlewares';

const store = applyMiddleware(...middlewares)(createStore)(rootReducers, DEV_TOOLS);

export const configureStore = () => store;
