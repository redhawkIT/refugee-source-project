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
import {Link} from 'react-router';
import firebase from 'firebase';
import ReactFireMixin from 'reactfire';

//    /////
//    MATERIAL-UI COMPONENTS
//    /////
import {List, ListItem} from 'material-ui/List';

import {blueA400} from 'material-ui/styles/colors';

import QuestionAnswer from 'material-ui/svg-icons/action/question-answer';
import StoreMallDirectory from 'material-ui/svg-icons/maps/store-mall-directory';

//    /////
//    COMPONENT
//    /////
const styles = {
    list: {
        overflowY: 'auto'
    }
};

const iconColor = blueA400;

var Nav = React.createClass ({
    render:function() {
        return (
            <List style={styles.list}>
                <Link to="/">
                    <ListItem primaryText={this.props.content.home}
                        leftIcon={<StoreMallDirectory color={iconColor}/>}/>
                </Link>
                <Link to="/about">
                    <ListItem primaryText="About Us"
                        leftIcon={<QuestionAnswer color={iconColor}/>} />
                </Link>
            </List>
        );
    }
});

export default Nav;
