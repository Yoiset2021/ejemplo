import {
    GET_ALL_COMMITS_BY_PROYECT_SUCCESS,
} from '../actionTypes'

export default function reducer(state = [], { type, payload }) {
    switch (type) {
        case GET_ALL_COMMITS_BY_PROYECT_SUCCESS:
            {
                return payload
            }
        default:
            return state
    }
}