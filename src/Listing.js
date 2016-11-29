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
                    title={this.props.listing.name}
                    subtitle={this.props.listing.address}
                    actAsExpander={true}
                    showExpandableButton={true}
                    />
                <CardActions>
                    <FlatButton label="Website" href={this.props.listing.link}/>
                    <FlatButton label={"Phone: " + this.props.listing.phone} href={"tel:" + this.props.listing.phone}/>
                </CardActions>
                <CardText expandable={true}>
                    {this.props.listing.description}
                </CardText>
            </Card>
        );
    }
});

export default Listing;
