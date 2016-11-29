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


//    /////
//    MATERIAL-UI COMPONENTS
//    /////
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


//    /////
//    COMPONENT
//    /////
const styles = {
    card: {
        textAlign: 'center'
    }
};
var Directory = React.createClass ({
    render:function() {
        return (
            <Card style={styles.card}>
                <CardTitle title="Home - Directory"/>
                <CardText>
                    Language: {this.props.lang}
                    <p>
                        This is the Directory component.
                    </p>
                </CardText>
            </Card>
        );
    }
});

export default Directory;
