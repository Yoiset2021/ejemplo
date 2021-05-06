import {
    GET_REPOSITORIES_BY_USER_START
} from './type'

export const getAllRepositoriesByUser = payload => ({
    type: GET_REPOSITORIES_BY_USER_START,
    payload
})