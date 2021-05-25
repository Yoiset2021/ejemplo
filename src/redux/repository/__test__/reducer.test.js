import React from 'react'

import repositories from '../reducer'

describe('repository', () => {
    it('retorna el estado inicial', () => {
        expect(
            repositories({ data: [], isLoading: false, error: null }, {})
        ).toEqual({ data: [], isLoading: false, error: null })
    }),
    it('comienza la obtencion de repositorios', () => {
        expect(
            repositories(
                { data: [], isLoading: false, error: null }, 
                { type: "GET_REPOSITORIES_BY_USER_START" }
            )
        ).toEqual({ data: [], isLoading: true, error: null })
    }),
    it('la obtencion de repositorios devuelve un error', () => {
        const error = 'Se produjo un error'
        expect(
            repositories(
                { data: [], isLoading: false, error: null },
                { type: "GET_REPOSITORIES_BY_USER_ERROR", error }
            )
        ).toEqual({ data: [], isLoading: false, error })
    }),
    it('se completa la obtencion de repositorios', () => {
        const listRepositorios = { 
            data: [ 
                { id: 1, name: 'ejemplo' }, { id: 2, name: 'prueba' }
            ]
        }
        expect(
            repositories(
                { data: [], isLoading: false, error: null },
                { type: "GET_REPOSITORIES_BY_USER_COMPLETE", repositories: listRepositorios }
            )
        ).toEqual({ data: listRepositorios.data, isLoading: false, error: null })
    })
})