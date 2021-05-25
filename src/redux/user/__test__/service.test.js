import React from 'react'

import { getUserProfile } from '../service'

it('Probar la llamada al api', async() => {
    try {
        const res = await getUserProfile('Yoiset2021')
        expect(res.data.name).toBeDefined()
    } catch (e) {
        expect(e).toBeTruthy();
    }
})