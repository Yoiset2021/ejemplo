import {
    GET_USER_SUCCESS
} from '../actionTypes'

export default function reducer(state = {}, { type, payload }) {
    switch (type) {
        case GET_USER_SUCCESS:
            {
                return payload
            }
        default:
            return state
    }
}