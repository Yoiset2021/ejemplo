import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getAllRepositoriesByUser} from '../../../redux/actions'

class Repository extends Component {

    async componentDidMount(){
        const {getAllRepositoriesByUser} = this.props
        await getAllRepositoriesByUser([])
    }

    render() {
        const {repositories} = this.props
        return (
            <div className="p-5">
                <div className="mb-3 border-bottom solid text-center font-weight-bold "> 
                 <h3> Lista de Repositorios </h3> 
                </div>
                <div className="d-flex justify-content-center">
                    <ul className="list-group">
                    {
                        repositories.map(r => {
                            return (
                                <li key={r.id} className="list-group-item d-flex justify-content-center align-items-center"> 
                                    <h5>{r.name}</h5>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        repositories: state.repositories
    }
}
export default connect(mapStateToProps, {getAllRepositoriesByUser})(Repository)