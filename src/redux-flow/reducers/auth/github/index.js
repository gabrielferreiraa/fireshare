import { handleActions } from "redux-actions";
import * as action from "./actions";

const initialState = {
    isFetching: false,
    token: "",
    user: {}
};

const handlers = {
    [action.LOGIN_REQUEST]: state => ({
        ...state,
        isFetching: true
    }),
    [action.LOGIN_SUCCESS]: (state, action) => ({
        ...state,
        isFetching: false,
        user: action.user
    }),
    [action.LOGIN_ERROR]: state => ({
        ...state,
        isFetching: false
    })
};

export default handleActions(handlers, initialState);
