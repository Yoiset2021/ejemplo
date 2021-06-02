import {
    GET_USER_START
} from './type'


export const getUser = payload => ({
    type: GET_USER_START,
    payload
})