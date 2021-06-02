import React from 'react';

import hook from '../../hooks/useFetchUser';
import Loader from '../../Loader'
import Error from '../../Error'
import { Fragment } from 'react';

export default function Profile() {
    
const {user, isLoading, error } = hook.useFetchUser() 
 
    return ( 
        isLoading ? 
            <Loader text='OBTENIENDO DATOS DEL USER ...'/>
            :
            <Fragment>
                {!error ? 
                    <div className="card mt-4">
                        <div className="card-header">
                            <div className="mt-2 text-center font-weight-bold"> 
                                Nombre : {user.name}
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="mt-2">
                                    <img className="card-img-top img-fluid img-thumbnail rounded-circle" src={user.avatar_url} alt="avatar"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className=" px-5 mt-5">
                        <Error/>    
                    </div>
                 }
            </Fragment>
              
        );

}