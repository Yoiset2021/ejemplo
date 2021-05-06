import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getUser } from '../../redux/user/actions'

const useFetchUser = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.data)
    const isLoading = useSelector(state => state.user.isLoading)
    const error = useSelector(state => state.user.error)

    useEffect(() => {
        const username = 'yoiset2021'
        dispatch(getUser({ username }))
    }, [])

    return { user, isLoading, error }
}

export default useFetchUser