import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Layout from './components/layout'
import ListCommits from './components/commits'
import Profile from './components/user/profile'
import Repository from './components/user/repository'

class App extends Component {
  
  render () {
    return (
      <Layout>
        <Route path="/commits" component={ListCommits}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/repositories" component={Repository}/>
      </Layout>
    );
  }
}

export default App;
