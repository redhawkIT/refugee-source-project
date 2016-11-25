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
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

//    /////
//    MISC COMPONENTS
//    /////
//  Custom Components:
import LanguageSelection from './LanguageSelection';

//    /////
//    COMPONENT
//    /////
const styles = {
    card: {
        marginTop: 100,
        textAlign: 'center'
    }
};
var Gateway = React.createClass ({
    /*
    Material-UI is a bit weird. You can't pass args for buttons.
    Thus, separate anonymous functions
    */
    render:function() {
        return (
            <Card style={styles.card}>
                <CardTitle title="Language" />
                <CardActions>
                    <LanguageSelection setLang={this.props.setLang} />
                </CardActions>
            </Card>
        );
    }
});

export default Gateway;
