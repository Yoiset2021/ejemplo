import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navigation extends Component  {
    
    render () {
        return ( 
            <nav className="navbar navbar-expand-lg bg-dark navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/">Commits</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/">Repository</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default Navigation;