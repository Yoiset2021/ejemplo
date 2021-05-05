import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'
import commit from './commit/reducer'
import user from './user/reducer'
import repository from './repository/reducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
    commit,
    user,
    repository
})

const sagaMiddleware = createSagaMiddleware()

export default function store() {
    return {
        ...createStore(reducer, composeEnhancer(applyMiddleware(sagaMiddleware))),
        runSaga: sagaMiddleware.run(rootSaga)
    }
}