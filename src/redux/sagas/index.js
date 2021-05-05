import { all } from 'redux-saga/effects'

import commits from '../commit/saga'
import user from '../user/saga'
import repositories from '../repository/saga'

export default function* rootSaga() {
    yield all([
        commits(),
        user(),
        repositories()
    ])
}