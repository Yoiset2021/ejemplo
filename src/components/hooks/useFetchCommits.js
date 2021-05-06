import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { getAllCommitsByProyect } from "../../redux/commit/actions";

const useFetchCommits = () => {

    const dispatch = useDispatch();
    const commits = useSelector(state => state.commit.data);
    const isLoading = useSelector(state => state.commit.isLoading)
    const error = useSelector(state => state.commit.error)

    useEffect(() => {
        const owner = "Yoiset2021";
        const repo = "RegistroFacturas";
        dispatch(getAllCommitsByProyect({ owner, repo }));
    }, []);

    return { commits, isLoading, error }
}

export default useFetchCommits