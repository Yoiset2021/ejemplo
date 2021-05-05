import React from 'react'
import NotResult from '../noResult'

export default function listCommits({commits}) {
    return commits.length > 0 ? (
      <div className="table-responsive ">
        <table className="table table-bordered table-hover mt-3">
          <thead className="thead-dark">
            <tr className="text-center">
              <th scope="col"> Author </th>
              <th scope="col"> Message </th>
            </tr>
          </thead>
          <tbody>
            { commits.map(commit => {
                return (
                  <tr key={commit.sha} className="text-center">
                    <th scope="col">
                      {commit.commit.author.name}
                      {`<${commit.commit.author.email}>`}
                    </th>
                    <th scope="col"> {commit.commit.message} </th>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    ) : (
      <NotResult />
    );
  };