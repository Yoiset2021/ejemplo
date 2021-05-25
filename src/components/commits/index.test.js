import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import { Provider } from 'react-redux'

import storeFn from '../../redux/store'
import hook from '../hooks/useFetchCommits'
import Commits from './index'

const store = storeFn()

describe('<Commits/>', () => {
    it('Se renderiza el componente Loader', () => {
        hook.useFetchCommits = jest.fn().mockReturnValue({
            isLoading: true,
            commits: [],
            error : null
        })
        hook.useFetchCommits()
        render(
            <Provider store={store}>
                <Commits/>  
            </Provider>)
        expect(screen.getByText('OBTENIENDO COMMITS DEL REPO...')).toBeInTheDocument()
    })
    it('Se renderiza el componente Error', () => {
        hook.useFetchCommits = jest.fn().mockReturnValue({
            isLoading: false,
            commits: [],
            error : 'hubo un error'
        })
        hook.useFetchCommits()
        render(
            <Provider store={store}>
                <Commits/>  
            </Provider>)
        expect(screen.getByText('404 RESOURCE NOT FOUND')).toBeInTheDocument()
    })
    it('Se renderiza el componente notResult', () => {
        hook.useFetchCommits = jest.fn().mockReturnValue({
            isLoading: false,
            commits: [],
            error : null
        })
        hook.useFetchCommits()
        render(
            <Provider store={store}>
                <Commits/>  
            </Provider>)
        expect(screen.getByText('No hay resultados que mostrar')).toBeInTheDocument()
    })
    it('Se renderiza la lista de commits', () => {
        hook.useFetchCommits = jest.fn().mockReturnValue({
            isLoading: false,
            commits: [{
                commit: {
                    author: {
                        name: 'Pedro',
                        email: 'pedro@gmail.com'
                    },
                    mesagge: 'primer commit'
                },
                sha: '1'
            }],
            error : null
        })
        const {commits} = hook.useFetchCommits()
        const { container } = render(
            <Provider store={store}>
                <Commits/>  
            </Provider>)
        commits.forEach(commit => {
            expect(container).toHaveTextContent(commit.commit.author.name)
        })  
    })
})