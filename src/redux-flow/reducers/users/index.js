import { handleActions } from "redux-actions";
import * as action from "./actions";

const initialState = {
    isFetching: false,
    isAuthenticated: false,
    data: {
        name: "friend"
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
        isAuthenticated: true,
        data: action.data
    }),
    [action.REGISTER_ERROR]: state => ({
        ...state,
        isFetching: false,
        isAuthenticated: false
    })
};

export default handleActions(handlers, initialState);
