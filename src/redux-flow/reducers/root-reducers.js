import { combineReducers } from 'redux'
import githubAuthReducer from 'redux-flow/reducers/auth/github/index';
import googleAuthReducer from 'redux-flow/reducers/auth/google/index';

const rootReducers = combineReducers({
    auth: combineReducers({
        github: githubAuthReducer,
        google: googleAuthReducer
    })
})

export default rootReducers
