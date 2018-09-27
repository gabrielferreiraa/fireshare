import { applyMiddleware, createStore } from 'redux';
import { DEV_TOOLS } from '../../tools/constants';
import rootReducers from '../reducers/root-reducers';
import middlewares from '../stores/middlewares';

export const configureStore = () => applyMiddleware(...middlewares)(createStore)(rootReducers, DEV_TOOLS);
