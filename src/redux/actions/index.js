import { Octokit } from '@octokit/core'

import {
    HANDLE_API_ERROR,
    GET_ALL_COMMITS_BY_PROYECT_SUCCESS,
    GET_USER_SUCCESS,
    GET_ALL_REPOSITORIES_BY_USER_SUCCESS
} from '../actionTypes'


const octokit = new Octokit({ auth: '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' })

export const handleApiError = error => {
    return {
        type: HANDLE_API_ERROR,
        payload: error
    }
}

export const getAllCommistSuccess = response => {
    return {
        type: GET_ALL_COMMITS_BY_PROYECT_SUCCESS,
        payload: response
    }
}

export const getAllCommits = (owner, repo) => async dispatch => {
    try {
        const response = await octokit.request(`GET /repos/{owner}/{repo}/commits`, {
            owner,
            repo,
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        })
        dispatch(getAllCommistSuccess(response.data))
    } catch (error) {
        dispatch(handleApiError(error))
    }
}

export const getUserSuccess = response => {
    return {
        type: GET_USER_SUCCESS,
        payload: response
    }
}

export const getUser = () => async dispatch => {
    try {
        const response = await octokit.request(`GET /user`, {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        })
        dispatch(getUserSuccess(response.data))
    } catch (error) {
        dispatch(handleApiError(error))
    }
}


export const getAllRepositoriesByUserSuccess = response => {
    return {
        type: GET_ALL_REPOSITORIES_BY_USER_SUCCESS,
        payload: response
    }
}

export const getAllRepositoriesByUser = () => async dispatch => {
    try {
        const response = await octokit.request('GET /user/repos', {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        })
        dispatch(getAllRepositoriesByUserSuccess(response.data))
    } catch (error) {
        dispatch(handleApiError(error))
    }
}