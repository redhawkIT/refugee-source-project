/* jshint esnext:true */
/*
globals
React:false, ReactDOM: false,
$:false,
firebase:false, firebaseui:false,
Materialize:false,
document:false, window:false, console:false, alert:false, user:false
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); //Soft dependancy for Material-UI

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

import App from './App';
import Home from './Home';
import Resources from './Resources';
import Services from './Services';
import About from './About';
import Contribute from './Contribute';

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="resources" component={Resources}/>
                <Route path="services" component={Services}/>
                <Route path="about" component={About}/>
                <Route path="contribute" component={Contribute}/>
            </Route>
        </Router>
    </MuiThemeProvider>,
    document.getElementById('root')
);


