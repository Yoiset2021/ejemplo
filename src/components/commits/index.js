import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getAllCommits } from '../../redux/actions'
import NotResult from './noResult'

class ListCommits extends Component {
    
    async componentDidMount(){
        const {getAllCommits} = this.props
        const owner = 'Yoiset2021'
        const repo ='ejemplo'
        await getAllCommits(owner, repo)
    }

    render() {
        const {commits} = this.props
        return ( 
            <div className="card p-2 mt-5">
                <div className="card-header">
                    <h3 className="text-center"> Lista de commits </h3>
                </div>
                <div className="card-body d-flex justify-content-center">
                        {
                            commits.length > 0 ?
                                <div className="table-responsive w-50">
                                    <table className="table table-bordered table-hover mt-3" >
                                        <thead className="thead-dark">
                                            <tr className="text-center">
                                                <th scope="col"> Name User </th>
                                                <th scope="col"> Message </th>
                                            </tr>
                                        </thead>
                                        <tbody>                    
                                                {  commits.map(commit => {
                                                    return (
                                                        <tr key={commit.commit.id} className="text-center">
                                                            <th scope="col"> {commit.commit.author.name} </th>
                                                            <th scope="col"> {commit.commit.message}  </th>
                                                        </tr>
                                                        )
                                                    })
                                                }     
                                        </tbody>
                                    </table>
                                </div>
                            :
                            <NotResult/>
                        }
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        commits: state.commits
    }
}
export default connect(mapStateToProps, {getAllCommits})(ListCommits);