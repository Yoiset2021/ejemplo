import React, { Fragment } from "react";

import useFetchCommits from "../hooks/useFetchCommits";
import Loader from '../Loader'
import ListaCommits from './list'
import Error from '../Error'

export default () => {
  
  const {commits, isLoading, error } = useFetchCommits()

  return (
    isLoading ? 
      <Loader text='OBTENIENDO COMMITS DEL REPO...'/>
    :
    <Fragment>
      { !error ? 
        <div className="card p-2 mt-5">
          <div className="card-header">
            <h3 className="text-center"> Lista de commits </h3>
          </div>
          <div className="card-body d-flex justify-content-center">
             <ListaCommits commits={commits}/>  
          </div>
        </div>
      :
        <div className="px-5 mt-5">
          <Error/>    
        </div>
      
      }
    </Fragment>
  );
};
