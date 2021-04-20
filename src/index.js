import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render( 
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
            <App/>
            </Switch>    
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
