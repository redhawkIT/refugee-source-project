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
    getInitialState:function() {
        return({
            slideIndex: 0,      //Which tab you're on
            filters: {
                stateside: false,
                citizen: false,
                nationality: [''],  //Multiple nationalities.
                gender: '',
                lowIncome: true,
                service: {          //Seeking these services:
                    food: true,
                    shelter: true,
                    housing: true,
                    immigration: true,
                    resettlement: true,
                    esl: true,
                    employment: true,
                    childcare: true,
                    healthcare: true,
                    mental: true,
                    addiction: true,
                }
            }
            
        });
    },
    
    handleSlide:function(value) {
        this.setState({
            slideIndex: value,
        });
    },
    
    render:function() {
        console.log('HOME (REFUGEE) PROPS:', this.props);
        console.log('HOME (REFUGEE) INFO:', this.state);
        return (    
            <Row>
                <Col sm={12}>
                <Tabs
                    onChange={this.handleSlide}
                    value={this.state.slideIndex}
                >
                    <Tab label={this.props.content.tabMap} value={0} />
                    <Tab label={this.props.content.tabDirectory} value={1} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleSlide}
                    style={styles.views}
                >
                    <Col sm={12}>
                        <Paper>
                            <ServiceMap filters={this.state.filters} lang={this.props.lang} />
                        </Paper>
                    </Col>
                    <Col sm={12}>
                        <Paper>
                            <Directory filters={this.state.filters} lang={this.props.lang} />
                        </Paper>
                    </Col>
                </SwipeableViews>   
                </Col>
            </Row>            
        );
    }
});

export default Home;
