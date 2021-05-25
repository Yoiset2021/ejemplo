import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllRepositoriesByUser } from "../../redux/repository/actions";

function useFetchRepositories() {
    const dispatch = useDispatch();
    const repositories = useSelector(state => state.repository.data);
    const isLoading = useSelector(state => state.repository.isLoading);
    const error = useSelector(state => state.repository.error)

    useEffect(() => {
        const username = "yoiset2021";
        dispatch(getAllRepositoriesByUser({ username }));
    }, []);

    return { repositories, isLoading, error }
}

const exportFunction = {
    useFetchRepositories
};

export default exportFunction;