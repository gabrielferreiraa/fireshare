import { handleActions } from 'redux-actions';
import * as action from './actions';

const initialState = {
    isFetching: false
};

const handlers = {
    [action.REGISTER_REQUEST]: (state, action) => ({
        ...state,
        isFetching: true
    }),
    [action.REGISTER_SUCCESS]: (state, action) => ({
        ...state,
        isFetching: false
    }),
    [action.REGISTER_ERROR]: (state, action) => ({
        ...state,
        isFetching: false
    })
};

export default handleActions(handlers, initialState);
