import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import githubAuthReducer from "redux-flow/reducers/auth/github/index";
import googleAuthReducer from "redux-flow/reducers/auth/google/index";
import userReducer from "redux-flow/reducers/users";

export default history =>
    combineReducers({
        auth: combineReducers({
            github: githubAuthReducer,
            google: googleAuthReducer
        }),
        user: userReducer,
        router: connectRouter(history)
    });
