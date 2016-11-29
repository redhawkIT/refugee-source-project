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
import FlatButton from 'material-ui/FlatButton';



//    /////
//    COMPONENT
//    /////
const styles = {
    //Adding margin props to cards make their containers responsive to expanding.
    card: {
        margin: 10
    }
};
var Listing = React.createClass ({    
    
    render:function() {
        console.log("PROPS FOR LISTING:", this.props);
        return (
            <Card style={styles.card}>
                <CardHeader
                    title="Some Service"
                    subtitle="422 11th Ave NE, Seattle WA 98105"
                    actAsExpander={true}
                    showExpandableButton={true}
                    />
                <CardActions>
                    <FlatButton label="Webpage" href="https://www.google.com/"/>
                    <FlatButton label="Phone" href="tel:1111111111"/>
                </CardActions>
                <CardText expandable={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
            </Card>
        );
    }
});

export default Listing;
