import { put, call, takeLatest } from 'redux-saga/effects'

import {
    GET_ALL_COMMITS_BY_PROYECT_START,
    GET_ALL_COMMITS_BY_PROYECT_COMPLETE,
    GET_ALL_COMMITS_BY_PROYECT_ERROR
} from './type'

import { getAll } from './service'

export function* getAllCommitsByProyect({ payload }) {
    try {
        const commits = yield call(getAll, payload.owner, payload.repo)
        yield put({ type: GET_ALL_COMMITS_BY_PROYECT_COMPLETE, commits })
    } catch (error) {
        yield put({ type: GET_ALL_COMMITS_BY_PROYECT_ERROR, error })
    }
}


export default function* commits() {
    yield takeLatest(GET_ALL_COMMITS_BY_PROYECT_START, getAllCommitsByProyect)
}