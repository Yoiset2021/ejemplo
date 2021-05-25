import React from 'react'

import { getAllRepositories } from '../service'

it('Probar la llamada al api', async() => {
    try {
        const res = await getAllRepositories('Yoiset2021')
        res.data.forEach(repository => {
            expect(repository.id).toBeTruthy()
            expect(repository.name).toBeDefined()
        })
    } catch (e) {
        expect(e).toBeTruthy();
    }
})