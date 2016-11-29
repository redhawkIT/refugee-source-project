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
    card: {
        textAlign: 'center'
    }
};
var Home = React.createClass ({
    getInitialState:function() {
        return({
            slideIndex: 0,      //Which tab you're on
            stateside: false,
            citizen: false,
            nationality: [''],  //Multiple nationalities.
            gender: '',
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
            },
            lowIncome: true
        });
    },
    
    handleSlide:function(value) {
        this.setState({
            slideIndex: value,
        });
    },
    
    render:function() {
        console.log('REFUGEE INFO:', this.state);
        return (    
            <Row>
                <Col sm={12}>
                <Tabs
                    onChange={this.handleSlide}
                    value={this.state.slideIndex}
                    style={{width: '100%'}}
                >
                    <Tab label="Map" value={0} />
                    <Tab label="Directory" value={1} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleSlide}
                    style={{width: '100%'}}
                >
                    <Col sm={12}>
                        <Paper zDepth={2} style={{height: '100%'}}>
                            <ServiceMap parent={this.state} />
                        </Paper>
                    </Col>
                    <Col sm={12}>
                            <Directory parent={this.state} />
                    </Col>
                </SwipeableViews>   
                </Col>
            </Row>            
        );
    }
});

export default Home;
