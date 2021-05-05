import {
    GET_ALL_COMMITS_BY_PROYECT_START,
    GET_ALL_COMMITS_BY_PROYECT_COMPLETE,
    GET_ALL_COMMITS_BY_PROYECT_ERROR
} from './type'

const initialState = {
    data: [],
    isLoading: false,
    error: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_COMMITS_BY_PROYECT_START:
            {
                return { data: [], isLoading: true, error: null }
            }
        case GET_ALL_COMMITS_BY_PROYECT_ERROR:
            {
                return { data: [], isLoading: false, error: action.error }
            }
        case GET_ALL_COMMITS_BY_PROYECT_COMPLETE:
            {
                return { data: action.commits.data, isLoading: false, error: null }
            }
        default:
            return state
    }
}