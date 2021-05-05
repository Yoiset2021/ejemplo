import {
    GET_REPOSITORIES_BY_USER_START,
    GET_REPOSITORIES_BY_USER_COMPLETE,
    GET_REPOSITORIES_BY_USER_ERROR
} from './type'

const initialState = {
    data: [],
    isLoading: false,
    error: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_REPOSITORIES_BY_USER_START:
            {
                return { data: [], isLoading: true, error: null }
            }
        case GET_REPOSITORIES_BY_USER_ERROR:
            {
                return { data: [], isLoading: false, error: action.error }
            }
        case GET_REPOSITORIES_BY_USER_COMPLETE:
            {
                return { data: action.repositories.data, isLoading: false, error: null }
            }
        default:
            return state
    }
}