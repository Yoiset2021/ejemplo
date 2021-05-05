import { Octokit } from '@octokit/core'

const octokit = new Octokit()

export const getUserProfile = async(username) => {
    const response = await octokit.request(`GET /users/{username}`, {
        username,
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'content-type': 'application/www-urlencoded'
        }
    })
    return response
}