import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import Lista from './list'

describe('<lista/>', () => {
    it('Se renderiza el componente NotResult, lista de commits vacia', () => {
        const commits = []
        const { container } = render( <Lista commits = { commits }/>)
        expect(container).toHaveTextContent('No hay resultados que mostrar')
    }),
    it('Se renderiza la lista de commits', () => {
        const commits = [{
            commit: {
                author: {
                    name: 'Pedro',
                    email: 'pedro@gmail.com'
                },
                mesagge: 'primer commit'
            },
            sha: '1'
        }]
        const { container } = render( <Lista commits = { commits } />)
        commits.forEach(commit => {
            expect(container).toHaveTextContent(commit.commit.author.name)
        })
    })
})