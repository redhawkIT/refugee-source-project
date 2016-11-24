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

import App from './App';
import './index.css';

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                
            </Route>
        </Router>
    </MuiThemeProvider>,
    document.getElementById('root')
);

//<IndexRoute component={About}/>
//<Route path="experience" component={Experience}/>
//<Route path="portfolio" component={Portfolio}/>
//<Route path="stickers" component={Stickers}/>
