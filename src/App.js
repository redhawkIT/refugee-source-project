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
import firebase from 'firebase';
import FirebaseConfig from './FirebaseConfig';
firebase.initializeApp(FirebaseConfig);

//    /////
//    MATERIAL-UI COMPONENTS
//    /////
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';

//    /////
//    MISC COMPONENTS
//    /////
//  Grid System:
import {Container} from 'react-grid-system';
//  Custom Components:
import Gateway from './Gateway';
import Nav from './Nav';



//    /////
//    COMPONENT
//    /////
const styles = {
    //The following appBar styles could not be applied by MUItheme.
    appBar: {
        height: 65,
        position: 'fixed',
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
        width: "100%",
        position: "fixed",
        bottom: 65,
        textAlign: "center"
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
        //console.log(this.state);
        /*
        In order to pass lang, mobile and nav, we render children
        as clones with additional props. This allows us to pass data down routes.
        */
        console.log("APP PROPS:", this.props);
        console.log("APP STATE:", this.state);
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
                            
                            <Nav />
                            
                            <Paper zDepth={5} style={styles.footer}>
                                <em>
                                    Disclaimer: This is a student project, not a fully secured website
                                </em>
                            </Paper>
                        </Drawer>

                        <Container style={{
                            paddingTop: 100,
                            paddingLeft: this.state.nav ? styles.drawer.width : 20
                        }}>
                            {React.cloneElement(
                                this.props.children, { lang: this.state.lang }
                            )}
                        </Container>
                        
                    </div>
                }
            </div>
        );
    }
});

export default App;
