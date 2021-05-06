import React from 'react'

export default function Loader({text})  {
    return (
        <div className="jumbotron mt-5">
            <div className="d-flex justify-content-center align-content-center h5" >
                {text}
            </div>
        </div>
    )
}
