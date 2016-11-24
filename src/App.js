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
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import {blueGrey100} from 'material-ui/styles/colors';

//    /////
//    MISC COMPONENTS
//    /////
//  Grid System:
import {Container} from 'react-grid-system';
//  Custom Components:
import Gateway from './Gateway';



//    /////
//    COMPONENT
//    /////
const styles = {
    //The following appBar styles could not be applied by MUItheme.
    appBar: {
        height: 65,
        position: 'fixed',  //Appbar never disappears
        top: 0
    },
    drawer: {
        width: 200,
        marginTop: 65
    },
    container: {
        paddingTop: 100
    },
    footer: {
        textAlign: "center",
        width: "100%",
        position: "fixed",
        bottom: 65
    }
};

var App = React.createClass ({
    getInitialState:function() {
        var mobileView = (window.innerWidth < 768);
        return {
            mobile: mobileView,
            nav: !mobileView,
            lang: ''
        };
    },
    
    setLang:function(language) {
        this.setState({
            lang: language
        });
    },
    
    /*
    Material-UI Drawers are consistent w/ guidelines, but do not operate like
    traditional side-navs. I've overriden basic styles and added listeners
    for mobile view to adapt this component.
    */
    navToggle:function() {
        this.setState({nav: !this.state.nav});
    },
    componentDidMount:function() {
        window.addEventListener('resize', this.resize);
    },
    resize:function() {
        var mobileView = (window.innerWidth < 768);
        this.setState({
            mobile: mobileView,
            nav: !mobileView,
        });
    },
    
    render:function() {
        //  FOR DEVELOPMENT:
        console.log(this.state);
        return (
            <div>
                <AppBar
                    title={"Emerald Refuge"}
                    onTouchTap={this.navToggle}
                    style={styles.appBar}
                    zDepth={2}
                    />
                {!this.state.lang ?
                    <Container>
                        <Gateway setLang={this.setLang}/>
                    </Container>
                    :
                    <div>
                        <Drawer
                            open={this.state.nav}
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
                                backgroundColor: blueGrey100,
                                paddingLeft: this.state.nav ? styles.drawer.width : '0px'
                            }}>

                            <Container style={styles.container}>
                                {this.props.children}LANGUAGE
                            </Container>
                            <br></br>
                        </Paper>
                    </div>
                }
            </div>
        );
    }
});

export default App;
