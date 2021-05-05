import { put, call, takeLatest } from 'redux-saga/effects'

import {
    GET_REPOSITORIES_BY_USER_START,
    GET_REPOSITORIES_BY_USER_COMPLETE,
    GET_REPOSITORIES_BY_USER_ERROR
} from './type'

import { getAllRepositories } from './service'

export function* getAllRepositoriesByUser({ payload }) {
    try {
        const repositories = yield call(getAllRepositories, payload.username)
        yield put({ type: GET_REPOSITORIES_BY_USER_COMPLETE, repositories })
    } catch (error) {
        yield put({ type: GET_REPOSITORIES_BY_USER_ERROR, error })
    }
}

export default function* getRepositories() {
    yield takeLatest(GET_REPOSITORIES_BY_USER_START, getAllRepositoriesByUser)
}