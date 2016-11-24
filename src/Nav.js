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
import Divider from 'material-ui/Divider';

import {blueA400} from 'material-ui/styles/colors';

//All the icons used in the nav (6)... yes, separate paths. :(
import Face from 'material-ui/svg-icons/action/face';
import VerifiedUser from 'material-ui/svg-icons/action/verified-user';
import PermMedia from 'material-ui/svg-icons/action/perm-media';

import MailOutline from 'material-ui/svg-icons/communication/mail-outline';
import Call from 'material-ui/svg-icons/communication/call';

//    /////
//    COMPONENT
//    /////
const styles = {
    list: {
        overflowY: 'auto'
    },
    iconColor: blueA400
};

var Nav = React.createClass ({
    mixins: [ReactFireMixin],
    getInitialState:function() {
        return {
            contact: ''
        };
    },
    componentWillMount: function() {
        var refContact = firebase.database().ref("contact");
        this.bindAsObject(refContact, 'contact');
    },
    //Home, Resources, Services, About, Contribute
    render:function() {
        return (
            <List style={styles.list}>
                <Link to="/">
                    <ListItem primaryText="Home"
                        leftIcon={<Face color={styles.iconColor}/>}/>
                </Link>
                <Link to="/resources">
                    <ListItem primaryText="Resources"
                        leftIcon={<VerifiedUser color={styles.iconColor}/>} />
                </Link>
                <Link to="/services">
                    <ListItem primaryText="Services"
                        leftIcon={<VerifiedUser color={styles.iconColor}/>} />
                </Link>
                <Link to="/about">
                    <ListItem primaryText="About Us"
                        leftIcon={<VerifiedUser color={styles.iconColor}/>} />
                </Link>
                <Link to="/contribute">
                    <ListItem primaryText="How to Help"
                        leftIcon={<VerifiedUser color={styles.iconColor}/>} />
                </Link>
            </List>
        );
    }
});

export default Nav;
