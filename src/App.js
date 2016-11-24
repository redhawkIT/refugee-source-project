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
//  Firebase - BaaS
import firebase from 'firebase';
import FirebaseConfig from './FirebaseConfig';
firebase.initializeApp(FirebaseConfig);

//    /////
//    MATERIAL-UI COMPONENTS
//    /////
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); //Soft dependancy for Material-UI

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import {blueGrey900, blueGrey200, indigo900, indigo700} from 'material-ui/styles/colors';

//    /////
//    MISC COMPONENTS
//    /////
//  Grid System:
import {Container} from 'react-grid-system';
//  Custom Components:

//import NavElements from './NavElements';

//    /////
//    COMPONENT
//    /////
const styles = {
    drawer: {
        width: 200,
        marginTop: 65
    },
    footer: {
        textAlign: "center",
        width: "100%",
        position: "fixed",
        bottom: 65
    },
    //The following styles could not be applied by MUItheme.
    appBar: {
        height: 65,
        position: 'fixed',  //Appbar never disappears
        top: 0
    }
};

var App = React.createClass ({
    getInitialState:function() {
        var mobileView = (window.innerWidth < 768);
        return {
            mobile: mobileView,
            navOpen: !mobileView
        };
    },

    /*
    Material-UI Drawers are consistent w/ guidelines, but do not operate like
    traditional side-navs. I've overriden basic styles and added listeners
    for mobile view to adapt this component.
    */
    handleResize:function() {
        var mobileView = (window.innerWidth < 768);
        this.setState({
            mobile: mobileView,
            navOpen: !mobileView,
        });
    },
    componentDidMount:function() {
        window.addEventListener('resize', this.handleResize);
    },
    navToggleTap:function() {
        this.setState({navOpen: !this.state.navOpen});
    },
    render:function() {
        return (
            <div>
                <AppBar
                    title={"Emerald Refuge"}
                    onTouchTap={this.navToggleTap}
                    style={styles.appBar}
                    zDepth={2}
                    />
                <Drawer
                    open={this.state.navOpen}
                    docked={true}
                    containerStyle={styles.drawer}
                    zDepth={1}
                    >

                    <Paper zDepth={5} style={styles.footer}>
                        <b>© Ryan Keller 2016</b>
                    </Paper>
                </Drawer>

                <Paper
                    style={{
                        backgroundColor: blueGrey200,
                            paddingLeft: this.state.navOpen ? styles.drawer.width : '0px'
                    }}>

                    <Container style={{marginTop: styles.appBar.height}}>
                        <br></br>
                        {this.props.children}
                    </Container>
                    <br></br>
                </Paper>

            </div>
        );
    }
});

export default App;
