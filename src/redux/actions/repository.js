import {
    GET_REPOSITORIES_BY_USER_START
} from '../repository/type'

export const getAllRepositoriesByUser = payload => ({
    type: GET_REPOSITORIES_BY_USER_START,
    payload
})