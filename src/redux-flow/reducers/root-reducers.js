import { combineReducers } from 'redux'
import githubAuthReducer from 'redux-flow/reducers/auth/github/index'

const rootReducers = combineReducers({
    auth: combineReducers({
        github: githubAuthReducer
    })
})

export default rootReducers
