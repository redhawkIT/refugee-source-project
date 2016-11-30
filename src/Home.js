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

import firebase from 'firebase';
import ReactFireMixin from 'reactfire';


//    /////
//    MATERIAL-UI COMPONENTS
//    /////
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import ServiceMap from './ServiceMap';
import Directory from './Directory';


//    /////
//    COMPONENT
//    /////
const styles = {
    views: {
        padding: 10
    }
};
var Home = React.createClass ({
    mixins: [ReactFireMixin],
    getInitialState:function() {
        return({
            slideIndex: 0,      //Which tab you're on
            content: {
                map: {},
                directory: {}
            },
            filters: {
                stateside: false,
//                citizen: false,
//                nationality: [''],  //Multiple nationalities.
//                gender: '',
//                lowIncome: true,
//                service: {          //Seeking these services:
//                    food: true,
//                    shelter: true,
//                    housing: true,
//                    immigration: true,
//                    resettlement: true,
//                    esl: true,
//                    employment: true,
//                    childcare: true,
//                    healthcare: true,
//                    mental: true,
//                    addiction: true,
//                }
            }
            
        });
    },
    componentWillMount: function() {
        var path = "main/" + this.props.lang + "/home";
        var ref = firebase.database().ref(path);
        this.bindAsObject(ref, 'content');
    },
    
    handleSlide:function(value) {
        this.setState({
            slideIndex: value,
        });
    },
    
    render:function() {
        return (    
            <Row>
                <Col sm={12}>
                <Tabs
                    onChange={this.handleSlide}
                    value={this.state.slideIndex}
                >
                    <Tab label={this.state.content.map.title} value={0} />
                    <Tab label={this.state.content.directory.title} value={1} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleSlide}
                    style={styles.views}
                >
                    <Col sm={12}>
                        <Paper>
                            <ServiceMap 
                                lang={this.props.lang}
                                content={this.state.content.map}
                                filters={this.state.filters}  />
                        </Paper>
                    </Col>
                    <Col sm={12}>
                        <Paper>
                            <Directory 
                                lang={this.props.lang}
                                content={this.state.content.directory}
                                filters={this.state.filters}  />
                        </Paper>
                    </Col>
                </SwipeableViews>   
                </Col>
            </Row>            
        );
    }
});

export default Home;
