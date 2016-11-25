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



//    /////
//    COMPONENT
//    /////
const styles = {
    languageContainer: {
        textAlign: 'right',
        overflowX: 'auto'
    }
};

var Footer = React.createClass ({
    render:function() {
        return (
            <Paper>
                <div style={styles.languageContainer}>
                    <FlatButton label="English"
                        onTouchTap={() => this.props.setLang('en')} />
                    <FlatButton label="عَرَبِيّ"
                        onTouchTap={() => this.props.setLang('ar')} />
                    <FlatButton label="Language-C"
                        onTouchTap={() => this.props.setLang('cc')} />
                    <FlatButton label="Language-D"
                        onTouchTap={() => this.props.setLang('dd')} />
                    <FlatButton id='fr' label="français"
                        onTouchTap={() => this.props.setLang('fr')} />
                    <FlatButton id='sp' label="español"
                        onTouchTap={() => this.props.setLang('sp')} />
                </div>
            </Paper>
        );
    }
});

export default Footer;
