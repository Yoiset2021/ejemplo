import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getUser} from '../../../redux/actions'

class Profile extends Component {

    async componentDidMount(){
        const {getUser} = this.props
        const username = "Yoiset2021"
        await getUser(username)
    }

    render() { 
        const {user} = this.props
        return ( 
            <div className="card mt-4">
                <div className="card-header">
                    <div className="mt-2 text-center font-weight-bold"> 
                        Nombre : { user.name } 
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
         );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getUser})(Profile);