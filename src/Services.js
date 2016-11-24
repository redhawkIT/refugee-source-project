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

//    /////
//    COMPONENT
//    /////
const styles = {
    card: {
        marginTop: 100,
        textAlign: 'center'
    }
};
var Services = React.createClass ({
    render:function() {
        return (
            <Card style={styles.card}>
                <CardTitle title="Placeholder" subtitle="Services"/>
                <CardText>
                    Placeholder Section:
                    <br></br>
                    Language: {this.props.lang}
                </CardText>
            </Card>
        );
    }
});

export default Services;
