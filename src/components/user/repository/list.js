import React from 'react'
import NotResult from '../../noResult'

export default function Repositories({repositories}) {
    return repositories.length > 0 ? 
            (  
            <ul className="list-group"> {
                repositories.map( r => {
                    return ( 
                        <li key = { r.id } className="list-group-item d-flex justify-content-center align-items-center" >
                            <h5> { r.name } </h5> 
                        </li>
                    );
                })
            } 
            </ul>
        ) : 
        ( 
            <NotResult />
        );
    
}