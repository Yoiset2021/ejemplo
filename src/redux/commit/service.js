import { Octokit } from '@octokit/core'

const octokit = new Octokit()

export const getAll = async(owner, repo) => {
    const response = await octokit.request(`GET /repos/{owner}/{repo}/commits`, {
        owner,
        repo,
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'content-type': 'application/www-urlencoded'
        }
    })
    return response
}