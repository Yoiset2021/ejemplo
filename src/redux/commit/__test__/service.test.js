import React from 'react'

import { getAll } from '../service'

it('Probar la llamada al api', async() => {
    try {
        const res = await getAll('Yoiset2021', 'ejemplo')
        res.data.forEach(commit => {
            expect(commit.sha).toBeTruthy()
            expect(commit.commit.author.name).toEqual('Yoiset2021')
        })
    } catch (e) {
        expect(e).toBeTruthy();
    }
})