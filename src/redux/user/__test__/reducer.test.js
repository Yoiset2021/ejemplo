import React from 'react'

import user from '../reducer'

describe('testiando reducer de user', () => {
    test('retorna el estado inicial', () => {
            expect(
                user({ data: {}, isLoading: false, error: null }, {})
            ).toEqual({ data: {}, isLoading: false, error: null })
        }),
        test('comienza la obtencion del user', () => {
            expect(
                user({ data: {}, isLoading: false, error: null }, { type: "GET_USER_START" })
            ).toEqual({ data: {}, isLoading: true, error: null })
        }),
        test('la obtencion del user devuelve un error', () => {
            const error = 'Se produjo un error'
            expect(
                user({ data: {}, isLoading: false, error: null }, { type: "GET_USER_ERROR", error })
            ).toEqual({ data: {}, isLoading: false, error })
        }),
        test('se completa la obtencion del user', () => {
            const userProfile = {
                data: { name: 'Pedro', avatar_url: 'https://www.ejemplo.com/foto' }
            }
            expect(
                user({ data: [], isLoading: false, error: null }, { type: "GET_USER_COMPLETE", user: userProfile })
            ).toEqual({ data: userProfile.data, isLoading: false, error: null })
        })
})