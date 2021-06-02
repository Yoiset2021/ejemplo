import {
    GET_ALL_COMMITS_BY_PROYECT_START
} from './type'


export const getAllCommitsByProyect = payload => ({
    type: GET_ALL_COMMITS_BY_PROYECT_START,
    payload
})