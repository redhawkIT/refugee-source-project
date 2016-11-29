/* jshint esnext:true */
/*
globals
React:false, ReactDOM: false,
$:false,
firebase:false, firebaseui:false,
Materialize:false,
document:false, window:false, console:false, alert:false, user:false
*/

//    /////
//    IMPORT DEPENDENCIES
//    /////
import React from 'react';
import {Row, Col} from 'react-grid-system';

import firebase from 'firebase';
import ReactFireMixin from 'reactfire';


//    /////
//    MATERIAL-UI COMPONENTS
//    /////
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import Listing from './Listing';


//    /////
//    COMPONENT
//    /////
const styles = {
    //Adding margin props to cards make their containers responsive to expanding.
    card: {
        margin: 10
    }
};
var Directory = React.createClass ({
    mixins: [ReactFireMixin],
    getInitialState:function() {
        return {
            resources: []
        };
    },
    componentWillMount: function() {
        var ref = firebase.database().ref('resources/' + this.props.lang);
        this.bindAsArray(ref, 'resources');
    },
    
    render:function() {
        console.log("Directory state:", this.state.resources);
        var listings = this.state.resources;
        return (
                <div>
                        <p>
                            This is the Directory component. Language: {this.props.lang}. Check this sample entry:
                        </p>
                
                    {listings.map((listing, i) =>
                        <Listing key={i} listing={listing} />
                    )}

                </div>
        );
    }
});

export default Directory;
