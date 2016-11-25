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

//    /////
//    MATERIAL-UI COMPONENTS
//    /////
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

//    /////
//    MISC COMPONENTS
//    /////
//  Grid System:
import {Container} from 'react-grid-system';
//  Custom Components:
import LanguageSelection from './LanguageSelection';



//    /////
//    COMPONENT
//    /////
const styles = {
    languageContainer: {
        textAlign: 'right'
    }
};

var Footer = React.createClass ({
    render:function() {
        return (
            <Paper>
                <div style={styles.languageContainer}>
                    <LanguageSelection setLang={this.props.setLang} />
                </div>
            </Paper>
        );
    }
});

export default Footer;
