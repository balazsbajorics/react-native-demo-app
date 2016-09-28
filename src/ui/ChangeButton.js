"use strict";
const React = require('react');
const react_native_1 = require('react-native');
const style_1 = require('./style');
exports.ChangeButton = ({ onPress }) => {
    return (React.createElement(react_native_1.TouchableOpacity, {style: { alignSelf: 'stretch' }, onPress: onPress}, 
        React.createElement(react_native_1.Text, {style: [style_1.styles.mono, style_1.styles.button]}, "Change")
    ));
};
