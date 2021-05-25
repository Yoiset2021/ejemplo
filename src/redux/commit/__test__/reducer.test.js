import React from 'react'

import commits from '../reducer'

describe('commit', () => {
    test('retorna el estado inicial', () => {
        expect(
            commits({ data: [], isLoading: false, error: null }, {})
        ).toEqual({ data: [], isLoading: false, error: null })
    }),
    test('comienza la obtencion de commits', () => {
        expect(
            commits(
                { data: [], isLoading: false, error: null }, 
                { type: "GET_ALL_COMMITS_BY_PROYECT_START" }
            )
        ).toEqual({ data: [], isLoading: true, error: null })
    }),
    test('la obtencion de commits devuelve un error', () => {
        const error = 'Se produjo un error'
        expect(
            commits(
                { data: [], isLoading: false, error: null },
                { type: "GET_ALL_COMMITS_BY_PROYECT_ERROR", error }
            )
        ).toEqual({ data: [], isLoading: false, error })
    }),
    test('se completa la obtencion de commits', () => {
        const listCommits = {
          data: [
            {
              commit: {
                author: {
                  name: "Pedro",
                  email: "pedro@gmail.com",
                },
                mesagge: "primer commit",
              },
              sha: "1",
            },
          ],
        };
        expect(
            commits(
                { data: [], isLoading: false, error: null },
                { type: "GET_ALL_COMMITS_BY_PROYECT_COMPLETE", commits: listCommits }
            )
        ).toEqual({ data: listCommits.data, isLoading: false, error: null })
    })
})