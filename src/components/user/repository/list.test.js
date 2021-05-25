import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render} from '@testing-library/react'

import Lista from './list'

describe('<lista/>', () => {
    test('Se renderiza el componente NotResult, lista de repositorios vacia', () => {
        const repositories = []
        const {container} = render(<Lista repositories={repositories}/>)
        expect(container).toHaveTextContent('No hay resultados que mostrar') 
    }),
    test('Se renderiza la lista de repositorios', () => {
        const repositories = [ 
            { id: 1, name: 'ejemplo' }, { id: 2, name: 'prueba' }
        ]
        
        const {container} = render(<Lista repositories={repositories}/>)
        repositories.forEach(repository => {
            expect(container).toHaveTextContent(repository.name)
        })
    })
})