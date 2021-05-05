import {
    GET_USER_START
} from '../user/type'

export const getUser = payload => ({
    type: GET_USER_START,
    payload
})