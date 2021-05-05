import { put, call, takeLatest } from 'redux-saga/effects'

import {
    GET_USER_START,
    GET_USER_COMPLETE,
    GET_USER_ERROR
} from './type'

import { getUserProfile } from './service'

export function* getUser({ payload }) {
    try {
        const user = yield call(getUserProfile, payload.username)
        yield put({ type: GET_USER_COMPLETE, user })
    } catch (error) {
        yield put({ type: GET_USER_ERROR, error })
    }
}

export default function* user() {
    yield takeLatest(GET_USER_START, getUser)
}