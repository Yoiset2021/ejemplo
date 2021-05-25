import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import { Provider } from 'react-redux'

import storeFn from '../../../redux/store'
import hook from '../../hooks/useFetchUser'
import User from './index'

const store = storeFn()

describe('<Commits/>', () => {
    it('Se renderiza el componente Loader', () => {
        hook.useFetchUser = jest.fn().mockReturnValue({
            isLoading: true,
            user: {},
            error : null
        })
        hook.useFetchUser()
        render(
            <Provider store={store}>
                <User/>  
            </Provider>)
        expect(screen.getByText('OBTENIENDO DATOS DEL USER ...')).toBeInTheDocument()
    })
    it('Se renderiza el componente Error', () => {
        hook.useFetchUser = jest.fn().mockReturnValue({
            isLoading: false,
            user: {},
            error : 'hubo un error'
        })
        hook.useFetchUser()
        render(
            <Provider store={store}>
                <User/>  
            </Provider>)
        expect(screen.getByText('404 RESOURCE NOT FOUND')).toBeInTheDocument()
    })
    it('Se renderiza la lista de commits', () => {
        hook.useFetchUser = jest.fn().mockReturnValue({
            isLoading: false,
            user: { name: 'Pepe', url_avatar: 'https://www.foto.com/pepe' },
            error : null
        })
        const {user} = hook.useFetchUser()
        const { container } = render(
            <Provider store={store}>
                <User/>  
            </Provider>)
            expect(container).toHaveTextContent(user.name)
    })
})