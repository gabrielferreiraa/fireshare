import { handleActions } from 'redux-actions';
import * as action from './actions';

const initialState = {
    isFetching: false,
    data: {
        name: 'friend'
    }
};

const handlers = {
    [action.REGISTER_REQUEST]: state => ({
        ...state,
        isFetching: true
    }),
    [action.REGISTER_SUCCESS]: (state, action) => ({
        ...state,
        isFetching: false,
        data: action.data
    }),
    [action.REGISTER_ERROR]: state => ({
        ...state,
        isFetching: false
    })
};

export default handleActions(handlers, initialState);
