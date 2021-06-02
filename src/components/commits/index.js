import React, { Fragment } from "react";

import hook from "../hooks/useFetchCommits";
import Loader from '../Loader'
import ListaCommits from './list'
import Error from '../Error'

export default function Commits() {
  
  const {commits, isLoading, error } = hook.useFetchCommits()

  return (
    isLoading ? 
      <Loader text='OBTENIENDO COMMITS DEL REPO...'/>
    :    
    <Fragment>
      { !error ? 
        <ListaCommits commits={commits}/>  
        :
        <div className="px-5 mt-5">
          <Error/>    
        </div>
      }
    </Fragment>
  );
};
