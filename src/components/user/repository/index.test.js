import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import { Provider } from 'react-redux'

import storeFn from '../../../redux/store'
import hook from '../../hooks/useFetchRepositories'
import Repositories from './index'

const store = storeFn()

describe('<Commits/>', () => {
    it('Se renderiza el componente Loader', () => {
        hook.useFetchRepositories = jest.fn().mockReturnValue({
            isLoading: true,
            repositories: [],
            error : null
        })
        hook.useFetchRepositories()
        render(
            <Provider store={store}>
                <Repositories/>  
            </Provider>)
        expect(screen.getByText('OBTENIENDO REPOS DESDE API ...')).toBeInTheDocument()
    })
    it('Se renderiza el componente Error', () => {
        hook.useFetchRepositories = jest.fn().mockReturnValue({
            isLoading: false,
            repositories: [],
            error : 'hubo un error'
        })
        hook.useFetchRepositories()
        render(
            <Provider store={store}>
                <Repositories/>  
            </Provider>)
        expect(screen.getByText('404 RESOURCE NOT FOUND')).toBeInTheDocument()
    })
    it('Se renderiza el componente notResult', () => {
        hook.useFetchRepositories = jest.fn().mockReturnValue({
            isLoading: false,
            repositories: [],
            error : null
        })
        hook.useFetchRepositories()
        render(
            <Provider store={store}>
                <Repositories/>  
            </Provider>)
        expect(screen.getByText('No hay resultados que mostrar')).toBeInTheDocument()
    })
    it('Se renderiza la lista de commits', () => {
        hook.useFetchRepositories = jest.fn().mockReturnValue({
            isLoading: false,
            repositories: [
                { id: 1, name: 'Repo 1' },
                { id: 2, name: 'Repo 2' }
            ],
            error : null
        })
        const {repositories} = hook.useFetchRepositories()
        const { container } = render(
            <Provider store={store}>
                <Repositories/>  
            </Provider>)
        repositories.forEach(repository => {
            expect(container).toHaveTextContent(repository.name)
        })  
    })
})