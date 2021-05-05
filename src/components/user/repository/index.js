import React from "react";
import { Fragment } from "react";

import useFetchRepositories from "../../hooks/useFetchRepositories";
import ListReposotories from './list'
import Spinner from "../../Spinner";
import Error from '../../Error'

export default function Repository() {

  const {repositories, isLoading, error} = useFetchRepositories()

  return (
    isLoading ? 
      <Spinner text="OBTENIENDO REPOS DESDE API ..." />
      : 
      <div className="px-5">
      {!error ?
        <Fragment>
          <div className="mb-3 mt-5 border-bottom solid text-center font-weight-bold ">
            <h3> Lista de Repositorios </h3>
          </div>
          <div className="d-flex justify-content-center">
            <ListReposotories repositories={repositories}/>
          </div>
        </Fragment>
        : 
        <div className="mt-5">
          <Error/>    
        </div>
        }
      </div>
  ) 
}
