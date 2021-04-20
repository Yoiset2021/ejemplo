import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/layout'
import ListCommits from './components/commits'
import Profile from './components/user/profile'
import Repository from './components/user/repository'

ReactDOM.render( 
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Redirect from="/" to="commits"/>
                    <Route path="/commits" component={ListCommits}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/repositories" component={Repository}/>
                </Layout>
            </Switch>    
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
