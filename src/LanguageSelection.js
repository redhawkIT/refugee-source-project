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
import RaisedButton from 'material-ui/RaisedButton';

//    /////
//    COMPONENT
//    /////
const styles = {
    languageContainer: {
        overflowX: 'auto'
    }
};
var LanguageSelection = React.createClass ({
    /*
    Material-UI is a bit weird. You can't pass args for buttons.
    Thus, separate anonymous functions
    */
    render:function() {
        return (
            <div styles={styles.languageContainer}>
                <RaisedButton label="English"
                    onTouchTap={() => this.props.setLang('en')} />
                <RaisedButton label="عَرَبِيّ"
                    onTouchTap={() => this.props.setLang('ar')} />
                <RaisedButton label="Language-C"
                    onTouchTap={() => this.props.setLang('cc')} />
                <RaisedButton label="Language-D"
                    onTouchTap={() => this.props.setLang('dd')} />
                <RaisedButton id='fr' label="français"
                    onTouchTap={() => this.props.setLang('fr')} />
                <RaisedButton id='sp' label="español"
                    onTouchTap={() => this.props.setLang('sp')} />  
            </div>
        );
    }
});

export default LanguageSelection;
