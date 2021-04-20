import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import commits from './reducers/commits'
import user from './reducers/user'
import repositories from './reducers/repositories'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
    commits,
    user,
    repositories
})

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store