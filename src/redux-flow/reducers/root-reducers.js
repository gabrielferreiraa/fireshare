import { combineReducers } from 'redux'
import githubAuthReducer from 'redux-flow/reducers/auth/github/index';
import googleAuthReducer from 'redux-flow/reducers/auth/google/index';
import userReducer from 'redux-flow/reducers/users';

const rootReducers = combineReducers({
    auth: combineReducers({
        github: githubAuthReducer,
        google: googleAuthReducer
    }),
    user: userReducer
})

export default rootReducers
