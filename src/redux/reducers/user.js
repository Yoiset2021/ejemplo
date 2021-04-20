import {
    GET_USER_SUCCESS
} from '../actionsTypes'

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