import { handleActions } from 'redux-actions';
import * as action from './actions';

const initialState = {
    isFetching: false,
    isAuthenticated: false,
    token: '',
    user: {}
};

const handlers = {
    [action.LOGIN_REQUEST]: (state, action) => ({
        ...state,
        isFetching: true
    }),
    [action.LOGIN_SUCCESS]: (state, action) => ({
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: action.user
    }),
    [action.LOGIN_ERROR]: (state, action) => ({
        ...state,
        isFetching: false,
        isAuthenticated: false
    })
};

export default handleActions(handlers, initialState);
